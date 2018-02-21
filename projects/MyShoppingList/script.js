const enterButton = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.getElementById("list");
const spans = document.querySelectorAll("span");
var lis= document.querySelectorAll(lis);


function inputLength() {
	return input.value.length;
}

function createListElement() {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	// add the delete button 
	createDeleteButton(li);
	ul.appendChild(li);
	// add event listeners to new list item
	li.addEventListener("mouseenter", toggleDeleteShowClass); 
	li.addEventListener("mouseleave", toggleDeleteShowClass); 
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function rowClicked() {
	// if the li was clicked then toggle the class to display
	if (event.target && event.target.matches("li")) {
		event.target.classList.toggle("done");
	};
	// if the delete button was clicked, remove element
	if (event.target && event.target.matches("button")) {
		console.log(event);
		event.target.parentNode.removeEventListener("mouseenter", toggleDeleteShowClass);
		event.target.parentNode.removeEventListener("mouseleave", toggleDeleteShowClass);
		event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	};
}

// Toggle show class to only show the delete button for a row that has focus
function toggleDeleteShowClass() {
	if(event.target && event.target.matches("li")) {
		event.target.children[0].classList.toggle("showButton");
	}
}

function createDeleteButton(li) {
	// add del button
	const btn = document.createElement("button");
	btn.appendChild(document.createTextNode("X"));
	btn.setAttribute("class", "deleteButton showButton");
	li.appendChild(btn);

}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", rowClicked);

// create delete button for all items
lis.forEach(function(li){
	const btn = createDeleteButton(li);
	li.addEventListener("mouseenter", toggleDeleteShowClass); 
	li.addEventListener("mouseleave", toggleDeleteShowClass); 
});
