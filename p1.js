document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Función para agregar una tarea
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            const fileInput = document.createElement("input");
            fileInput.setAttribute("type", "file");
            li.appendChild(fileInput);
            const completeBtn = document.createElement("button");
            completeBtn.textContent = " Completado ";
            completeBtn.classList.add("delete-btn");
            li.appendChild(completeBtn);
            taskList.appendChild(li);
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = " Eliminar";
            deleteBtn.classList.add("delete-btn");
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = "";

            saveTasks();
        }
    }

    // Función para eliminar una tarea
    function deleteTask(taskElement) {
        taskElement.remove();
        saveTasks();
    }

    // Evento para agregar una tarea al hacer clic en el botón
    addTaskBtn.addEventListener("click", addTask);

    // Evento para agregar una tarea al presionar Enter en el input
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Evento delegado para eliminar una tarea al hacer clic en el botón de eliminar
    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            deleteTask(event.target.parentElement);
        }
    });

    // Función para guardar las tareas en el almacenamiento local del navegador
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll("li").forEach(function(task) {
            tasks.push(task.textContent);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Función para cargar las tareas desde el almacenamiento local del navegador
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(function(taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;
            const fileInput = document.createElement("input");
            fileInput.setAttribute("type", "file");
            li.appendChild(fileInput);
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.classList.add("delete-btn");
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    // Cargar tareas al cargar la página
    loadTasks();
});
