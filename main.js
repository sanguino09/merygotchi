/*
  Typograph: https://www.deviantart.com/excessts/art/My-chemical-romance-55579208
*/

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
    dumbell.style.color = "#3b3a3a";
    dice.style.color = "grey";
    gamepad.style.color = "grey";

    
  pet.style.display = "none";
  gamepadItem.style.display = "none";
  dumbellItem.style.display = "block";

    var gymAudio = document.getElementById("gymAudio");
  gymAudio.play();
});

dice.addEventListener("click",function(){
  dice.style.color = "#3b3a3a";
  dumbell.style.color = "grey";
  gamepad.style.color = "grey";

  pet.style.display = "block";
  gamepadItem.style.display = "none";
  dumbellItem.style.display = "none";
});

gamepad.addEventListener("click",function(){
  dice.style.color = "grey";
  dumbell.style.color = "grey";
  gamepad.style.color = "#3b3a3a";

  pet.style.display = "none";
  gamepadItem.style.display = "block";
  dumbellItem.style.display = "none";

  var gameAudio = document.getElementById("gameAudio");
  gameAudio.play();
});
utensils.addEventListener("click",function(){
  utensils.style.color = "#3b3a3a";
  book.style.color = "grey";
  paw.style.color = "grey";

  cat.style.display = "none";
  bookItem.style.display = "none";
  utensilsItem.style.display = "block";
});
book.addEventListener("click",function(){
  book.style.color = "#3b3a3a";
  utensils.style.color = "grey";
  paw.style.color = "grey";

  cat.style.display = "none";
  bookItem.style.display = "block";
  utensilsItem.style.display = "none";
});
paw.addEventListener("click",function(){
  paw.style.color = "#3b3a3a";
  utensils.style.color = "grey";
  book.style.color = "grey";

  cat.style.display = "block";
  bookItem.style.display = "none";
  utensilsItem.style.display = "none";

  var catAudio = document.getElementById("catAudio");
  catAudio.play();
});

var cat = document.getElementById("cat");
var bookItem = document.getElementById("bookItem");
var utensilsItem = document.getElementById("utensilsItem");
