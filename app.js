const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

//add a task
const addTask = () => {
    const taskText = todoInput.value.trim();

    if(taskText !=="") {
        const taskItem = createTaskItem(taskText);
        todoList.appendChild(taskItem);
        todoInput.value = "";
    }
};

//create new task item
const createTaskItem = (taskText) => {
    const taskItem = document.createElement("li");
    taskItem.className="todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteTask);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);

    return taskItem;
};

//delete tasks
const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    todoList.removeChild(taskItem);
};

//cross out tasks
const toggleTask = (event) => {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle("completed");
};

//event listeners
addTaskBtn.addEventListener("click", addTask);
todoInput.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
        addTask();
    }
});

todoList.addEventListener("change", toggleTask);

//examples of tasks
const initialTasks = ["Buy Groceries", "Pay Bills", "Walk The Dog"];

initialTasks.forEach((task) => {
    const taskItem = createTaskItem(task);
    todoList.appendChild(taskItem);
});
