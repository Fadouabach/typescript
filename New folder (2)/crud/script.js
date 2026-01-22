var dataBase = [];

function CreateTask() {
  var username = document.getElementById('username').value;
  var tittle = document.getElementById('tittle').value;
  var description = document.getElementById('description').value;
  var status = document.getElementById('status').value;

  var task = { username, tittle, description, status };
  dataBase.push(task);  
  displayTasks();
}

function displayTasks() {
  var tasksDiv = document.getElementById('tasks');
  tasksDiv.innerHTML = "";

  for (var i = 0; i < dataBase.length; i++) {
    tasksDiv.innerHTML += `
      <p>
        ${dataBase[i].tittle} - ${dataBase[i].description} (${dataBase[i].status})
        <button onclick="deleteTask(${i})">delete</button>
      </p>
    `;
  }
}

function deleteTask(index) {
  dataBase.splice(index, 1); 
  displayTasks();
}


