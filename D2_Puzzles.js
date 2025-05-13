/*
This function will run whenever any page is reloaded.
The first if statemnt changes the log in button to say log out if a user is logged in.
The other if statemnts check if the user that's logged in has compelted an puzzles, and stes them to show compelted if they have.
*/
window.onload = function() {
	
	if (localStorage.getItem("Bungie_ID") !== null) {
		document.getElementById("buttonLogin").textContent="Log Out";
	}
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Heresy__Chess_Puzzle") == "True") {
		document.getElementById("Chess_Puzzle").style.background='green';
		document.getElementById("Chess_Puzzle").style.borderColor='green';
		document.getElementById("Chess_Puzzle__Comp").textContent="Mark as Incomplete";
	}
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Heresy__Barrow_Dyad") == "True") {
		document.getElementById("Barrow_Dyad").style.background='green';
		document.getElementById("Barrow_Dyad").style.borderColor='green';
		document.getElementById("Barrow_Dyad__Comp").textContent="Mark as Incomplete";
	}
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Sundered_Doctrine__Quest") == "True") {
		document.getElementById("SD__Quest").style.background='green';
		document.getElementById("SD__Quest").style.borderColor='green';
		document.getElementById("SD__Quest__Comp").textContent="Mark as Incomplete";
	}
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Revenant__Scorn_Organ") == "True") {
		document.getElementById("Scorn_Organ").style.background='green';
		document.getElementById("Scorn_Organ").style.borderColor='green';
		document.getElementById("Scorn_Organ__Comp").textContent="Mark as Incomplete";
	}
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Vespers_Host__Quest") == "True") {
		document.getElementById("VH__Quest").style.background='green';
		document.getElementById("VH__Quest").style.borderColor='green';
		document.getElementById("VH__Quest__Comp").textContent="Mark as Incomplete";
	}
	
}



/*
This function checks whether the user is logged in or out and calls the correct function depending on the result.
*/
function LogInOrOut() {
	
	if (localStorage.getItem("Bungie_ID") === null) {
		LogIn();
	}
	
	else {
		LogOut();
	}
	
}



/*
This function prompts the user to log in by entering their Bungie ID, which is then stored in local browser storage.
More local browser storage variables are then created using the user's Bungie ID, but only if they don't already exist.
The page is then refreshed after these are created.
*/
function LogIn() {
	
	localStorage.setItem("Bungie_ID", prompt("Please enter your Bungie ID:",""));
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Heresy__Chess_Puzzle") === null){
		localStorage.setItem(localStorage.getItem("Bungie_ID") + "__Heresy__Chess_Puzzle", "False");
	}
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Heresy__Barrow_Dyad") === null){
		localStorage.setItem(localStorage.getItem("Bungie_ID") + "__Heresy__Barrow_Dyad", "False");
	}
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Sundered_Doctrine__Quest") === null){
		localStorage.setItem(localStorage.getItem("Bungie_ID") + "__Sundered_Doctrine__Quest", "False");
	}
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Revenant__Scorn_Organ") === null){
		localStorage.setItem(localStorage.getItem("Bungie_ID") + "__Revenant__Scorn_Organ", "False");
	}
	
	if (localStorage.getItem(localStorage.getItem("Bungie_ID") + "__Vespers_Host__Quest") === null){
		localStorage.setItem(localStorage.getItem("Bungie_ID") + "__Vespers_Host__Quest", "False");
	}
	
	alert("Login Successful");
	
	location.reload();

}



/*
This function deletes the Bungie ID stored in local storage, logging the user out, before refreshing the page.
*/
function LogOut() {
	
	localStorage.removeItem("Bungie_ID");
	
	alert("Logged Out");
	
	location.reload();

}



/*
This takes the local storage variable of the users Bungie ID and the puzzle they want to complete as a parameter.
The function then checks if a user is signed in and if they are it then chekcs if the user has this puzzle as completed or not, and marks it as compeleted or incomplete accordingly.
*/
function Complete(Button_ID){
	if (localStorage.getItem("Bungie_ID") === null){
		alert("You must login to mark a puzzle as completed");
	}
	
	else if (localStorage.getItem(Button_ID) == "False"){
		localStorage.setItem(Button_ID, "True");
		alert("Marked as completed");
		location.reload();
	}
	
	else if (localStorage.getItem(Button_ID) == "True"){
		localStorage.setItem(Button_ID, "False");
		alert("Marked as incomplete");
		location.reload();
	}
}



/*
These functions all call the Complete() function, passing the parameter which matches the button that was clicked by the user.
*/

function Heresy__Chess_Puzzle__Comp() {
	
	Complete(localStorage.getItem("Bungie_ID") + "__Heresy__Chess_Puzzle");
	
}



function Heresy__Barrow_Dyad__Comp() {
	
	Complete(localStorage.getItem("Bungie_ID") + "__Heresy__Barrow_Dyad");
	
}



function Sundered_Doctrine__Quest__Comp() {
	
	Complete(localStorage.getItem("Bungie_ID") + "__Sundered_Doctrine__Quest");
	
}



function Revenant__Scorn_Organ__Comp() {
	
	Complete(localStorage.getItem("Bungie_ID") + "__Revenant__Scorn_Organ");
	
}



function Vespers_Host__Quest__Comp() {
	
	Complete(localStorage.getItem("Bungie_ID") + "__Vespers_Host__Quest");
	
}