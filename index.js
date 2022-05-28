var numberofdrums=document.querySelectorAll(".drum").length; // getting the total numbrr of drums whic have the cass drum
for(var i=0;i<numberofdrums;++i)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML)
    {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom1 = new Audio("sounds/tom-2.mp3");
        tom1.play();
        break;

      case "s":
        var tom1 = new Audio("sounds/tom-3.mp3");
        tom1.play();
        break;

      case "d":
        var tom1 = new Audio("sounds/tom-4.mp3");
        tom1.play();
        break;

      case "j":
        var tom1 = new Audio("sounds/crash.mp3");
        tom1.play();
        break;

      case "k":
        var tom1 = new Audio("sounds/kick-bass.mp3");
        tom1.play();
        break;

      case "l":
        var tom1 = new Audio("sounds/snare.mp3");
        tom1.play();
        break;

      default:
        console.log("NOT ANY SOUND");


    }
  });
}


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

// function handClick()
// {
//   alert("I got clicked");
// }
