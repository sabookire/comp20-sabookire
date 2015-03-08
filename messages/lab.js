function.parse() {
	// Step 1: create instance of object
	request = new XMLHttpRequest();

	// Step 2: create/"open" HTTP request
	request.open("GET", "data.json", true);

	// Step 3: set up a way to manage response --to a function
	request.onreadystatechange = parseData;

	// Step 4: execute response
	request.send();
}

function.parseData() {
	if (request.readyState == 4 && request.status == 200) {
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);
		for (i = 0; i< converted.length; i++) {
			messagesDiv.innerHTML += "<p>" + converted[i]['content'] + 
			" - " converted[i]['username'] + "</p>";
		}
	}
	else if (request.readyState == 4 && request.status != 200) {
		alert("Fail! Sorry Charlie");
	}
}

// console.log("Got data back!");
// step 3, you can use a remote URL