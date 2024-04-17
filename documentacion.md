Tecnológico de estudios superiores Ecatepec

- Sergio Sánchez Yescas
- Cesar Alejandro Camacho Rodríguez

Desarrollo de aplicaciones web

Leonardo Miguel Moreno 

Villalba

15651

Documentación



Código bien organizado y comentado

||**HTML**|
| :- | :- |
||<!DOCTYPE html>|
|**1**|<HTML lang="es">|
|**2**|<head>|
|**3**|`    `<meta charset="UTF-8">|
|**4**|`    `<meta name="viewport" content="width=device-width, initial-scale=1.0">|
|**5**|`    `<title>Lista de Tareas</title>|
|**6**|`    `<link rel="stylesheet" href="p1.css">|
|**7**|</head>|
|**8**|<body>|
|**9**|`    `<div class="container">|
|**10**|`        `<h1>Lista de Tareas</h1>|
|**11**|`        `<input type="text" id="taskInput" placeholder="Escribe una nueva tarea">|
|**12**|`        `<button id="addTaskBtn">Agregar tarea</button>|
|**13**|`        `<ul id="taskList"></ul>|
|**14**|`    `</div>|
|**15**||
|**16**|`    `<script src="p1.js"></script>|
|**17**|</body>|
|**18**|</html>|
|**19**||
|**20**|<!DOCTYPE html>|
|**21**|<html lang="es">|
|**22**|<head>|
|**23**|`    `<meta charset="UTF-8">|
|**24**|`    `<meta name="viewport" content="width=device-width, initial-scale=1.0">|
|**25**|`    `<title>Lista de Tareas</title>|










||**CSS**|
| :- | :- |
|**1**|body {|
|**2**|`    `background-color: #a2d2ff;|
|**3**|`    `font-family: Arial, sans-serif;|
|**4**|`    `margin: 0;|
|**5**|`    `padding: 0;|
|**6**|}|
|**7**|.container {|
|**8**|`    `background-color: #ffeeaf;|
|**9**|`    `max-width: 600px;|
|**10**|`    `margin: 0 auto;|
|**11**|`    `padding: 20px;|
|**12**|}|
|**13**|input[type="text"] {|
|**14**|`    `width: calc(100% - 80px);|
|**15**|`    `padding: 10px;|
|**16**|`    `margin-bottom: 10px;|
|**17**|`    `background-color: #fffbde;|
|**18**|}|
|**19**|button {|
|**20**|`    `padding: 10px 20px;|
|**21**|`    `background-color: #3f9cff;|
|**22**|`    `color: #fff;|
|**23**|`    `border: none;|
|**24**|`    `cursor: pointer;|
|**25**|}|
|**26**|ul {|
|**27**||
|**28**|`    `list-style-type: none;|
|**29**|`    `padding: 0;|
|**30**|`    `color: rgb(0, 0, 0);|
|**31**|}|
|**32**|li {|
|**33**|`    `background-color: #8fc1a9;|
|**34**|`    `padding: 10px;|
|**35**|`    `border-bottom: 1px solid #b6b6b6;|
|**36**|}|
|**37**|li:last-child { |
|**38**|`    `border-bottom: none;|
|**39**|}|


||**JavaScript**||
| :- | :- | :- |
|**1** |document.addEventListener("DOMContentLoaded", function() {||
|**2**|`    `const taskInput = document.getElementById("taskInput");||
|**3**|`    `const addTaskBtn = document.getElementById("addTaskBtn");||
|**4**|`    `const taskList = document.getElementById("taskList");||
|**5**|||
|**6**|`    `// Función para agregar una tarea||
|**7**|`    `function addTask() {||
|**8**|`        `const taskText = taskInput.value.trim();||
|**9**|`        `if (taskText !== "") {||
|**10**|`            `const li = document.createElement("li");||
|**11**|`            `li.textContent = taskText;||
|**12**|`            `const fileInput = document.createElement("input");||
|**13**|`            `fileInput.setAttribute("type", "file");||
|**14**|`            `li.appendChild(fileInput);||
|**15**|`            `const completeBtn = document.createElement("button");||
|**16**|`            `completeBtn.textContent = " Completado ";||
|**17**|`            `completeBtn.classList.add("delete-btn");||
|**18**|`            `li.appendChild(completeBtn);||
|**19**|`            `taskList.appendChild(li);||
|**20**|`            `const deleteBtn = document.createElement("button");||
|**21**|`            `deleteBtn.textContent = " Eliminar";||
|**22**|`            `deleteBtn.classList.add("delete-btn");||
|**23**|`            `li.appendChild(deleteBtn);||
|**24**|`            `taskList.appendChild(li);||
|**25**|`            `taskInput.value = "";||
|**26**|||
|**27**|`            `saveTasks();||
|**28**|`        `}||
|**29**|`    `}||
|**30**|||
|**31**|`    `// Función para eliminar una tarea||
|**32**|`    `function deleteTask(taskElement) {||
|**33**|`        `taskElement.remove();||
|**34**|`        `saveTasks();||
|**35**|`    `}||
|**36**|||
|**37**|`    `// Evento para agregar una tarea al hacer clic en el botón||
|**38**|`    `addTaskBtn.addEventListener("click", addTask);||
|**39**|||
|**40**|`    `// Evento para agregar una tarea al presionar Enter en el input||
|**41**|`    `taskInput.addEventListener("keypress", function(event) {||
|**42**|`        `if (event.key === "Enter") {||
|**43**|`            `addTask();||
|**44**|`        `}||
|**45**|`    `});||
|**46**|||
|**47**|`    `// Evento delegado para eliminar una tarea al hacer clic en el botón de eliminar||
|**48**|`    `taskList.addEventListener("click", function(event) {||
|**49**|`        `if (event.target.classList.contains("delete-btn")) {||
|**50**|`            `deleteTask(event.target.parentElement);||
|**51**|`        `}||
|**52**|`    `});||
|**53**|||
|**54**|`    `// Función para guardar las tareas en el almacenamiento local del navegador||
|**55**|`    `function saveTasks() {||
|**56**|`        `const tasks = [];||
|**57**|`        `taskList.querySelectorAll("li").forEach(function(task) {||
|**58**|`            `tasks.push(task.textContent);||
|**59**|`        `});||
|**60**|`        `localStorage.setItem("tasks", JSON.stringify(tasks));||
|**61**|`    `}||
|**62**|||
|**63**|`    `// Función para cargar las tareas desde el almacenamiento local del navegador||
|**64**|`    `function loadTasks() {||
|**65**|`        `const tasks = JSON.parse(localStorage.getItem("tasks")) || [];||
|**66**|`        `tasks.forEach(function(taskText) {||
|**67**|`            `const li = document.createElement("li");||
|**68**|`            `li.textContent = taskText;||
|**69**|`            `const fileInput = document.createElement("input");||
|**71**|`            `fileInput.setAttribute("type", "file");||
|**72**|`            `li.appendChild(fileInput);||
|**73**|`            `const deleteBtn = document.createElement("button");||
|**74**|`            `deleteBtn.textContent = "Eliminar";||
|**75**|`            `deleteBtn.classList.add("delete-btn");||
|**76**|`            `li.appendChild(deleteBtn);||
|**77**|`            `taskList.appendChild(li);||
|**78**|`        `});||
|**79**|`    `}||
|**80**|||
|**81**|`    `// Cargar tareas al cargar la página||
|**82**|`    `loadTasks();||
|**83**|});||
|**84**|||

**Descripción del proyecto**

El proyecto es una aplicación web de gestión de tareas que permite a los usuarios agregar, eliminar y actualizar tareas de manera intuitiva. Se centra en proporcionar una experiencia de usuario fluida y agradable mediante transiciones y animaciones sutiles para mejorar la interacción y la retroalimentación visual.

**Tecnologías utilizadas**

HTML5 para la estructura del sitio web.

CSS3 para el diseño y la presentación, incluyendo estilos responsivos para adaptarse a diferentes dispositivos.

JavaScript para la lógica de la aplicación y la manipulación del DOM.

**Cómo utilizar la aplicación**

Al acceder al sitio, los usuarios verán una interfaz limpia y minimalista con la lista de tareas.

Para agregar una nueva tarea, simplemente escriban la tarea que tengan por hacer para después hacer clic en el botón "Agregar tarea", se abre un formulario donde pueden mostrar los detalles que el usuario agregó y confirmarla.

Al agregar una nueva tarea tienes una opción de poder colocar el nombre de tus archivos desde el explorador de archivos muy fácil. 

Para eliminar una tarea, los usuarios pueden hacer clic en el botón de eliminación asociado a cada tarea. Se animará suavemente la eliminación de la tarea de la lista.

Las actualizaciones de las tareas también están disponibles. Al hacer clic en una tarea, esta se eliminará de manera inmediata 
