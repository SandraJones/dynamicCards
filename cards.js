// Create an HTML page that contains a text area 
// and a button labeled Create.
// When the user enters in text into the text 
// area and then clicks the create button, 
// create a new card element in the DOM. You 
// decide the height/width of the card.
// When the user clicks the Delete button, 
// the containing card, and no other cards, 
// should then be removed from the DOM. Not 
// just made invisible, actually removed from 
// the DOM.
//need a delete button within the card
//card has to be a class because there will be more than one
var createButton = document.getElementById("create");
var erase = document.getElementsByClassName("delete");
//it will be a dynamic delete
var input = document.getElementById("inputArea");
//card will also be dynamic, created only  after a button is clicked

var container = document.getElementById("container");//is our output
var card = document.getElementsByClassName("card"); 

createButton.addEventListener("click", createCard);

function createCard() {
	var output = '<div class="card"><section><p class = "text">' + 
	              input.value +'</p></section><input type="button" class="delete" value="delete"/></div>';
  //push to the DOM
  container.innerHTML += output; 
  //run through all the listeners and 
   deleteButtonEventListener(); 
  }
//have to put a delete button on each card as it is created
function eraseContent (event) {
  var thisCard = event.target.parentElement;
  container.removeChild(thisCard)
}

function deleteButtonEventListener() {
	for (var i = 0; i < erase.length; i++) {
    console.log(erase[i]);
    var del = document.getElementsByClassName("delete")
      for (var j=0; j< del.length; j++) {
        del[j].addEventListener("click", eraseContent)
      }
  }  
}