let cleaned = 0;
let order = 0;

let add = document.querySelector("#add");
add.addEventListener("click", add_new_task);

function add_new_task() {
	
	if (cleaned == 1) {
		cleaned = 0
		document.querySelector("#elements").innerHTML = "";
	}

	let div = document.createElement("div");
	let task = document.querySelector("#task");
	let description = document.querySelector("#description");
	let error_task = document.querySelector("#error_task");

	if (task.value == "") {
		error_task.style.opacity = 1;
	}

	else {
		error_task.style.opacity = 0;

		div.className = "element";
		div.id = "element" + order;
		div.innerHTML = "<div class='left'><h2>"+ task.value +"</h2> <p>"+ description.value +"</p></div><div class='right'><img src='bin.png' onclick='delete_t("+order+")' id='trash' class='trash'><img src='check-mark.png' id='completed' onclick='completed("+order+")'></div>";
		document.querySelector("#elements").append(div);
		order += 1;
		task.value = "";
		description.value = "";
	}
}

let remove = document.querySelector("#remove");
remove.addEventListener("click", remove_all_tasks);

function remove_all_tasks() {
	cleaned = 1;
	document.querySelector("#elements").innerHTML = "List is cleaned :)";
	document.querySelector("#error_task").style.opacity = 0;
}

function delete_t(order) {
	document.querySelector("#element" + order).remove();
}

function completed(order) {
	document.querySelector("#element" + order).classList.add("completed");
}