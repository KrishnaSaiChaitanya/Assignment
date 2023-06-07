// import data from "./Data.json";
// let currentTab = "do";

// function changeTab(tabName) {
//   document.getElementById(currentTab + "Tab").classList.remove("active");
//   document.getElementById(tabName + "Tab").classList.add("active");
//   document.getElementById(currentTab + "Content").style.display = "none";
//   document.getElementById(tabName + "Content").style.display = "block";
//   currentTab = tabName;
// }

// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const taskText = taskInput.value.trim();
//   if (taskText !== "") {
//     const li = document.createElement("li");
//     li.innerText = taskText;
//     li.draggable = true;
//     li.ondragstart = function (event) {
//       event.dataTransfer.setData("text/plain", event.target.id);
//     };
//     document.getElementById("doList").appendChild(li);
//     taskInput.value = "";
//   }
// }

// function allowDrop(event) {
//   event.preventDefault();
// }

// function drop(event, targetTab) {
//   event.preventDefault();
//   const taskId = event.dataTransfer.getData("text/plain");
//   const task = document.getElementById(taskId);
//   const targetList = document.getElementById(targetTab + "List");

//   // Check if the targetList is the same as the current list of the task
//   if (targetList !== task.parentNode) {
//     targetList.appendChild(task);
//   }
// }

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerText = taskText;
    li.draggable = true;
    li.ondragstart = function (event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    };
    document.getElementById("doList").appendChild(li);
    taskInput.value = "";
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event, targetTab) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData("text/plain");
  const task = document.getElementById(taskId);
  const targetList = document.getElementById(targetTab + "List");

  // Check if the targetList is the same as the current list of the task
  if (targetList !== task.parentNode) {
    targetList.appendChild(task);
  }
}

function updateDivContent() {
  var myDiv = document.getElementById("pills-login");
  var new_div = document.getElementById("after-login");
  var a1 = document.getElementById("iframe");
  var a2 = document.getElementById("iframe_text");
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      planets = data.planets;
      myDiv1.src = planets[id].imageURL;
      myDiv2.innerHTML = planets[id].information;
      console.log(planets[id]);
    });
  a1.src = "https://embed.lottiefiles.com/animation/98194";
  a2.innerHTML = "Loading ...";
  new_div.style.display = "block";
  myDiv.innerHTML = "";
  myDiv.appendChild(new_div);
}

function replaceElements() {
  var myDiv = document.getElementById("planet_details");
  var loading = document.getElementById("loading");
  // myDiv.innerHTML = "";
  // myDiv.appendChild(loading);
  loading.style.display = "block";

  setTimeout(function () {
    loading.style.display = "none";
    myDiv.style.display = "block";
  }, 3000);
}
function displayDialog() {
  $("#myDialog").modal("show");
}

function showDetails(id) {
  let planets = [];
  var myDiv1 = document.getElementById("model_img");
  var myDiv2 = document.getElementById("model_text");
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      planets = data.planets;
      myDiv1.src = planets[id].imageURL;
      myDiv2.innerHTML = planets[id].information;
      console.log(planets[id]);
    })
    .catch((error) => console.error("Error:", error));
}
