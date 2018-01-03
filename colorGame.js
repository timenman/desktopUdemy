var diff =6;
var colors = generateRandomColors(diff);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var pickedColorDisplay = document.querySelector("#pickedColorDisplay");
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
hardButton.classList.add("selected");

pickedColorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", function(){
    diff = 3;
    easyButton.classList.add("selected")
    hardButton.classList.remove("selected")
    for(var i = 3; i < 6; i++){
      squares[i].style.display="none";
  //    squares[i].classList.add("hidden");
    }
    reset();
  });

hardButton.addEventListener("click", function(){
    diff =6;
    easyButton.classList.remove("selected")
    hardButton.classList.add("selected")
    for(var i = 3; i < 6; i++){
      squares[i].style.display="block";
  //    squares[i].classList.remove("hidden");
    }
    reset();
  });

for(var i = 0; i < squares.length; i++){

  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        console.log("You win!");
        h1.style.backgroundColor = clickedColor;
        for (var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = clickedColor;
        message.textContent="Correct!";
        resetButton.textContent="Play again?";
      }

      }
      else {
        this.style.backgroundColor = "#232323"
        message.textContent="Try Again!";
        resetButton.textContent="New Colors";
    };
 });
}

resetButton.addEventListener("click", function(){
  reset();
  })



//Generates randon RGB colors to assign to squares
function generateRandomColors(num){
  var arr =[]
  for(var i= 0; i<num; i++) {
  var r = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  string= "rgb("+r+", "+g+", "+b+")";
  arr.push(string);
  }
  return arr;
}

//Selects the target color
function pickColor(){
  var pick = Math.floor(Math.random() * colors.length);
  choice = colors[pick];
  return choice;
  }

function reset(){
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(diff);
    pickedColor = pickColor();
    pickedColorDisplay.textContent = pickedColor;
    message.textContent = "";
    for(var i = 0; i < squares.length; i++){ //Need to fix this to make for Easy/Hard mode

      squares[i].style.backgroundColor = colors[i];
    }
}
