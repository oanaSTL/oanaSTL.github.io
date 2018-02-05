var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var spans = document.querySelectorAll("span");
var lis = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
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
	// if the li was clicked then toggle the class to display strikethrough
	if (event.target && event.target.matches("li")) {
		event.target.classList.toggle("done");
	};
	// if the delete button was clicked, remove the event listeners and remove the li element
	if (event.target && event.target.matches("button")) {
		console.log(event);
		event.target.parentNode.removeEventListener("mouseenter", toggleDeleteShowClass);
		event.target.parentNode.removeEventListener("mouseleave", toggleDeleteShowClass);
		event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	};
}

// Toggle the show class to only show the delete button for a row that has focus
function toggleDeleteShowClass() {
	if(event.target && event.target.matches("li")) {
		event.target.children[0].classList.toggle("showButton");
	}
}

function createDeleteButton(li) {
	// add delete button
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Del"));
	btn.setAttribute("class", "deleteButton showButton");
	li.appendChild(btn);
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", rowClicked);

// create the delete button for all list items and add the event listeners
lis.forEach(function(li){
	createDeleteButton(li);
	li.addEventListener("mouseenter", toggleDeleteShowClass); 
	li.addEventListener("mouseleave", toggleDeleteShowClass); 
});





/*var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("mylist");
var listItem = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
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

function toggleDone(event){
    if (event.target.tagName === "li") {
        event.target.classList.toggle("done");
    }


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
*/