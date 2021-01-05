const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  socket.on("message", ({ user, message }) => {
    io.emit("message", `${user.name}: ${message}`);
  });
});

http.listen(8080, () => {
  console.log("listening on http://localhost:8080");
});
