// 1. Copy the code below into the JavaScript file
// 2. In your HTML, create an text input and a button.
// 3. The text input should only accept letters. No numbers.
// 4. Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// 5. Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// 6. Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// 7. When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// 8. The output of each of the functions should immediately appear as well.
function reversal(testString) {
	 output.innerHTML = testString.split("").reverse().join(""); 
	}

function alphabits(testString) {
	output.innerHTML = "<br>" + testString.split("").sort().join("");
	}

function palindrome(testString) {
	var reversal2 = testString.split("").reverse().join("");
	if(testString === reversal2) {
		output.innerHTML += '<br>Your word is a palindrome.'
	} else {
		output.innerHTML += '<br>Your word is not a palindrome.'
	}
}

var output = document.getElementById("output")

var enterKey = document.getElementById("input")
enterKey.addEventListener("keypress", function(){
	var testString = document.getElementById("input").value;
	if(event.keyCode === 13 && testString){
		button.click();
	} 
})

var button = document.getElementById("submit");
button.addEventListener("click", function(){
	var testString = document.getElementById("input").value;

	if(testString){
	reversal(testString);
	// I can't get it to run all 3 only 2???? 
	// alphabits(testString);
	palindrome(testString);
	}
})



