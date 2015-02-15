function init() {
	var convertButton = document.getElementById("convertButton");
	convertButton.onclick = handleConvertButton;
}

function handleConvertButton() {
	// code to get the value from the form
	var daysInput = document.getElementById("daysInput");
	var days = daysInput.value;
	var converted = days * 60 * 60 * 24;
	
	var answer = document.getElementById("answer");
	answer.innerHTML = days + ' days is equal to ' + converted + ' seconds';
}

window.onload = init;