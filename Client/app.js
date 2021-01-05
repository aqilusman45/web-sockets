const socket = io("ws://localhost:8080");

socket.on("message", (message) => {
  const ul = document.getElementById("messages");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
});

function setName(event) {
  event.preventDefault();
  const val = event.target.name.value;
  if (val) {
    localStorage.setItem("name", val);
  } else {
    alert("cannot set empty name");
  }
}

function sendMessage(event) {
  event.preventDefault();
  const username = localStorage.getItem("name") || `random user`;
  const val = event.target.message.value;
  if (val) {
    socket.emit("message", {
      user: {
        name: username,
      },
      message: val,
    });
  } else {
    alert("cannot send empty message");
  }
}
