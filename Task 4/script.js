let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `
        <strong>${task.text}</strong><br>
        <span class="date">${task.date || ""}</span>

        <div class="task-buttons">

        <button onclick="completeTask(${index})">Complete</button>

        <button onclick="editTask(${index})">Edit</button>

        <button onclick="deleteTask(${index})">Delete</button>

        </div>
        `;

        list.appendChild(li);

    });

}

function addTask(){

    const text=document.getElementById("taskInput").value.trim();
    const date=document.getElementById("taskDate").value;

    if(text===""){
        alert("Enter a task");
        return;
    }

    tasks.push({
        text:text,
        date:date,
        completed:false
    });

    saveTasks();
    displayTasks();

    document.getElementById("taskInput").value="";
    document.getElementById("taskDate").value="";

}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();

}

function completeTask(index){

    tasks[index].completed=!tasks[index].completed;

    saveTasks();

    displayTasks();

}

function editTask(index){

    const newTask=prompt("Edit Task",tasks[index].text);

    if(newTask!==null && newTask.trim()!=""){

        tasks[index].text=newTask;

        saveTasks();

        displayTasks();

    }

}

displayTasks();