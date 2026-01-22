var dataBase = [];
function readTask() {
  var table = document.getElementById("taskTable");
  table.innerHTML = "";

  for (var i = 0; i < dataBase.length; i++) {
    var data = dataBase[i];
    table.innerHTML +=
    `  <tr>
            <td>${data.fullName}</td>
            <td>${data.title}</td>
            <td>${data.description}</td>
            <td>${data.status}</td>
            <td><button onclick="editTask(${i})">edit</button></td>
            <td><button onclick="deleteTask(${i})">delete</button></td>
      </tr>  
    `;
  }
}
function deleteTask(index) {
  dataBase.splice(index, 1); 
  readTask();
}
function CreateTask() {
  var task = {
    fullName: document.getElementById("username").value,
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    status: document.getElementById("status").value,
  }; 

  dataBase[dataBase.length] = task;
  readTask();
}
 function editTask(index) {
  document.getElementById("username").value = dataBase[index].fullName;
  document.getElementById("title").value = dataBase[index].title;
  document.getElementById("description").value = dataBase[index].description;
  document.getElementById("status").value = dataBase[index].status;
  editIndex = index;
}