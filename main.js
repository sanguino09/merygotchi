/*
  Typograph: https://www.deviantart.com/excessts/art/My-chemical-romance-55579208
*/

var happyness = false;
var energy = false;
var lose = false;

const COLORS_BUTTON = [
    { text: "Rojo", color: "#890000", buttonsColor: "gold" },
    { text: "Turquesa", color: "#19B1AC", buttonsColor: "#ccc" },
    { text: "Negro", color: "#111", buttonsColor: "#bbb" },
    { text: "Azul", color: "#001F91", buttonsColor: "#ddd" },
    { text: "Amarillo", color: "#d68111", buttonsColor: "#1836a3" }
  ];
  
  const changeColor = document.querySelector(".change-color");
  const tamagotchi = document.querySelector(".tamagotchi");
  
  changeColor.innerHTML = COLORS_BUTTON.map(color => {
    return `<button style="--color: ${color.color}; --text-color: ${color.buttonsColor}">
      <span>${color.text}</span>
    </button>`;
  }).join("");
  
  const buttons = Array.from(document.querySelectorAll("button"));
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tamagotchi.style.setProperty("--body-color", COLORS_BUTTON[index].color);
      tamagotchi.style.setProperty("--buttons-color", COLORS_BUTTON[index].buttonsColor);
    });
  });

  var pet = document.getElementById("pet");
  var dumbell = document.getElementById("dumbell");
  var utensils = document.getElementById("utensils");
  var dice = document.getElementById("dice");
  var paw = document.getElementById("paw");
  var gamepad = document.getElementById("gamepad");
  var book = document.getElementById("book");

  dumbell.addEventListener("click",function(){

    happyness = true;
    energy = false;

    if (lose == false){
    dumbell.style.color = "#3b3a3a";
    dice.style.color = "grey";
    gamepad.style.color = "grey";

    
  pet.style.display = "none";
  gamepadItem.style.display = "none";
  dumbellItem.style.display = "block";

  var gymAudio = document.getElementById("gymAudio");
  gymAudio.play();
    }
});

dice.addEventListener("click",function(){

  happyness = true;
  energy = false;

  if (lose == false){
  dice.style.color = "#3b3a3a";
  dumbell.style.color = "grey";
  gamepad.style.color = "grey";

  pet.style.display = "block";
  gamepadItem.style.display = "none";
  dumbellItem.style.display = "none";
}
});

gamepad.addEventListener("click",function(){

  happyness = false;
  energy = true;

  if (lose == false){
  dice.style.color = "grey";
  dumbell.style.color = "grey";
  gamepad.style.color = "#3b3a3a";

  pet.style.display = "none";
  gamepadItem.style.display = "block";
  dumbellItem.style.display = "none";

  var gameAudio = document.getElementById("gameAudio");
  gameAudio.play();
}
});
utensils.addEventListener("click",function(){
  energy = true;
  happyness = false;

  if (lose == false){
  utensils.style.color = "#3b3a3a";
  book.style.color = "grey";
  paw.style.color = "grey";

  cat.style.display = "none";
  bookItem.style.display = "none";
  utensilsItem.style.display = "block";
  
  var foodAudio = document.getElementById("foodAudio");
  foodAudio.play();
}
});
book.addEventListener("click",function(){

  happyness = true;
  energy = false;

  if (lose == false){
  book.style.color = "#3b3a3a";
  utensils.style.color = "grey";
  paw.style.color = "grey";

  cat.style.display = "none";
  bookItem.style.display = "block";
  utensilsItem.style.display = "none";

  var bookAudio = document.getElementById("bookAudio");
  bookAudio.play();
  }
});
paw.addEventListener("click",function(){

  happyness = true;
  energy = false;

  if (lose == false){
  happyness = True;
  energy = False;
  paw.style.color = "#3b3a3a";
  utensils.style.color = "grey";
  book.style.color = "grey";

  cat.style.display = "block";
  bookItem.style.display = "none";
  utensilsItem.style.display = "none";

  var catAudio = document.getElementById("catAudio");
  catAudio.play();
}

});

var cat = document.getElementById("cat");
var bookItem = document.getElementById("bookItem");
var utensilsItem = document.getElementById("utensilsItem");

document.body.style.zoom="120%"


// Warte bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
  // Finde das Fortschrittsbalken-Element
  var progressBar = document.getElementById("progressBar");
  // Finde das innere Balken-Element
  var innerBar = document.getElementById("innerBar");

  // Setze die Breite des inneren Balkens auf 0
  innerBar.style.width = "0";

  // Animiere den Fortschrittsbalken
  var width = 100;
  var interval = setInterval(function() {
    // Erhöhe die Breite des inneren Balkens um 1%
    if (happyness == false){
      width = width - 0.1;
      innerBar.style.width = width + "%";
    }
    if (happyness == true){
      width = width + 0.05;
      innerBar.style.width = width + "%";
    }
    
    if(width < 0){
      lose = true;

      pet.style.display = "none";
      gamepadItem.style.display = "none";
      dumbellItem.style.display = "none";
      cat.style.display = "none";
      bookItem.style.display = "none";
      utensilsItem.style.display = "none";
      
      deathItem.style.display = "block";
      
      progressBar.style.display ="none";
      progressBar2.style.display ="none";
    }
  }, 15); // Geschwindigkeit der Animation (kleiner = schneller)
});

document.addEventListener("DOMContentLoaded", function() {
  // Finde das Fortschrittsbalken-Element
  var progressBar2 = document.getElementById("progressBar2");
  // Finde das innere Balken-Element
  var innerBar2 = document.getElementById("innerBar2");

  // Setze die Breite des inneren Balkens auf 0
  innerBar.style.width = "0";

  // Animiere den Fortschrittsbalken
  var width2 = 100;
  var interval2 = setInterval(function() {
    // Erhöhe die Breite des inneren Balkens um 1%
    if (energy == false){
      width2 = width2 - 0.1;
      innerBar2.style.width = width2 + "%";
    }
    if (energy == true){
      width2 = width2 + 0.05;
      innerBar2.style.width = width2 + "%";
    }
    // Wenn die Breite 100 erreicht, stoppe die Animation
    if(width2 < 0){
      lose = true;

      pet.style.display = "none";
      gamepadItem.style.display = "none";
      dumbellItem.style.display = "none";
      cat.style.display = "none";
      bookItem.style.display = "none";
      utensilsItem.style.display = "none";

      deathItem.style.display = "block";

      progressBar.style.display ="none";
      progressBar2.style.display ="none";
    }
  }, 15); // Geschwindigkeit der Animation (kleiner = schneller)
});
function playMusic() {
  var audio = document.getElementById("audio");
  audio.volume = 0.4;
  audio.play();
}

