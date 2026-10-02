function biggerButton(){
    document.getElementById("userText").style.fontSize = "24pt";
}

function mooButton() {
	var textBox = document.getElementById("userText");
	var upper = textBox.value.toUpperCase();

	var sentences = upper.split(".");
	textBox.value = sentences.join("-Moo");
}

function changeStyle() {
	var textBox = document.getElementById("userText");
 
	if (document.getElementById("fancy").checked) {
		textBox.style.fontWeight = "bold";
		textBox.style.color = "blue";
		textBox.style.textDecoration = "underline";
	} else {
		textBox.style.fontWeight = "normal";
		textBox.style.color = "black";
		textBox.style.textDecoration = "none";
	}
}