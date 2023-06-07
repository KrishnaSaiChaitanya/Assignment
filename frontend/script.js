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

function updateDivContent1() {
  var myDiv = document.getElementById("pills-login");
  var new_div = document.getElementById("after-login");
  var logout = document.getElementById("logout");
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;
  console.log(email, password);
  var a1 = document.getElementById("iframe");
  var a2 = document.getElementById("iframe_text");
  a1.src = "https://embed.lottiefiles.com/animation/98194";
  a2.innerHTML = "Loading ...";
  new_div.style.display = "block";

  fetch("http://localhost:8082/api/auth/login", {
    method: "POST",

    body: JSON.stringify({
      email: email,
      password: password,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.token) {
        a1.src = "https://embed.lottiefiles.com/animation/85341";
        a2.innerHTML = "Succussfully Logged In";
        logout.style.display = "block";
      } else {
        a1.src = "https://embed.lottiefiles.com/animation/90569";
        a2.innerHTML = "Invalid User";
      }
    });

  myDiv.innerHTML = "";
  myDiv.appendChild(new_div);
}

function updateDivContent2() {
  var myDiv = document.getElementById("pills-register");
  var new_div = document.getElementById("after-register");
  var logout = document.getElementById("logout");
  var email = document.getElementById("register_email").value;
  var name = document.getElementById("register_name").value;
  var password = document.getElementById("register_password").value;
  console.log(email, password);
  var a1 = document.getElementById("iframe1");
  var a2 = document.getElementById("iframe_text1");
  a1.src = "https://embed.lottiefiles.com/animation/98194";
  a2.innerHTML = "Loading ...";
  new_div.style.display = "block";

  fetch("http://localhost:8082/api/auth/register", {
    method: "POST",

    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data._id) {
        a1.src = "https://embed.lottiefiles.com/animation/85341";
        a2.innerHTML = "Account Created";
        logout.style.display = "block";
      } else {
        a1.src = "https://embed.lottiefiles.com/animation/90569";
        a2.innerHTML = "Error Occurred";
      }
    });

  myDiv.innerHTML = "";
  myDiv.appendChild(new_div);
}
function logout() {
  location.reload();
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
