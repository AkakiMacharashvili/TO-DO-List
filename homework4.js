const body = document.body;
const button_check = document.querySelector("button");
const input_text = document.querySelector("input");
const list = document.querySelector(".task_list");
let combine = document.getElementsByClassName("comnibe");
const btn = document.getElementsByClassName("Delete");
let test = document.getElementsByClassName("check_box");

list.addEventListener('click', checker);
list.addEventListener('click', deletion);

button_check.addEventListener("click", () => {
	let cur = document.querySelector(".input").value;

	if(cur.length == 0){
		alert("Please enter a task");
	}else{
		const div1 = document.createElement("div");
		div1.classList.add("to_do");
		const new_task = document.createElement("li");
		const box = document.createElement("input");
		new_task.innerText = cur;
		new_task.classList.add('task_todo');
		box.setAttribute("type", "checkbox");
		box.classList.add("check_box");
		div1.appendChild(box);
		div1.appendChild(new_task);
		const del = document.createElement("button");
		del.innerText = "Delete";
		del.classList.add("Delete");
		div1.append(del);

		list.append(div1);
		input_text.value = "";
	} 
})


function deletion(e){
	const cur = e.target;
	if(cur.classList[0] === "Delete"){

			const par = cur.parentElement;
			par.remove();	
	
	}
}

function checker(e){
	const cur = e.target;
	if(cur.classList[0] === "check_box"){
		const now = cur.parentElement;
		now.classList.toggle('completed');

	}


}