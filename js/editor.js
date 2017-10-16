const editControls = document.querySelector(".edit-controls");

editControls.addEventListener("click", function(event) {
	const command = (event.target !== undefined && event.target.getAttribute("data-command") !== null) ? 
					event.target.getAttribute("data-command"): null;
	if(command === null ) return;
	console.log("Selected command: " + command);

	if(document.getSelection().toString().length === 0) {
		alert("Please select some text before editing the content.");
		return;
	}
	
	let selectedEditableNode = document.querySelector("[contenteditable='true']"); 

	if(selectedEditableNode === null) return;

	let newContent = "";
	const selectedContent = window.getSelection().toString();

	if(command === "h1") {
		newContent = "<h1>" + selectedContent + "</h1>";
	} else if (command === "h2") {
		newContent = "<h2>" + selectedContent + "</h2>";
	}else if (command === "h3") {
		newContent = "<h3>" + selectedContent + "</h3>";
	}else if (command === "h4") {
		newContent = "<h4>" + selectedContent + "</h4>";
	}else if (command === "h5") {
		newContent = "<h5>" + selectedContent + "</h5>";
	}else if (command === "h6") {
		newContent = "<h6>" + selectedContent + "</h6>";
	}else if (command === "p") {
		newContent = "<p>" + selectedContent + "</p>";
	}
	
	let newFullContent = selectedEditableNode.innerHTML.replace(selectedContent, newContent);
	selectedEditableNode.innerHTML = newFullContent;
});