// Create falling hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 5}s`;
  heart.style.opacity = Math.random();
  document.querySelector('.hearts-bg').appendChild(heart);
  setTimeout(() => heart.remove(), 8000); // remove after 8s
}

// Create many hearts periodically
setInterval(createHeart, 300); 
$("#open").click(() => {
  $("#envelope").toggleClass('open close')
  setTimeout(() => {
    $("#page1").fadeOut(() => $("#nameForm").fadeIn());
  }, 1800);
});

function wellbeingResponse(response) {
  $("#nameForm").fadeOut(() => {
    let text;
    if (response === 'Good') {
      text = "AANAA BAA HEHWEHEAWH ALII MY BABY BIII MWA🥺🥺🥺🥺";
    } else {
      text = "HOYYY 😭😭😭😭😭 UHUGHUGU MY BABYY ILL ALWAYS BE WITH YOU OKEAYY MY LOVEE? TELL ME TELL ME RAJUDD BECAUSE NAA RAJUD KO MY BONN WITH YOU MYY BABYY TELL ME WHENEVER AND ILL GIVEE YOU AS MUCHIES LABLAB AND COMFORTT HUGGIES AND ASSURANCE MY BABYY ALWAYSS ONLY FOR YOU AND YOU ONLY MY BABYY I LOVEE NA LOVE NA MANY LOVE YOU SO SO MUCHIES MY BONN MY BABYY";
    }
    $("#greetingText").text(text);
    $("#messageSection").fadeIn();
  })
}

function askMara() {
  $("#messageSection").fadeOut(() => $("#Mara").fadeIn());
}

function MaraResponse(response) {
  // Yes/No answers here can be given logic if needed
  $("#Mara").fadeOut(() => $("#SorrySection").fadeIn());
}

function sorryResponse(response) {
  $("#SorrySection").fadeOut(() => $("#apologySection").fadeIn());
}

$("#spotifyButton").click(() => {
  window.location.href = "https://open.spotify.com/track/2ADSh3Mp744n2586tpUtIW?si=41d801b4d9e4479f";
});