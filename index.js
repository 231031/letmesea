
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
/*
let btnDownload = document.querySelector(".btnSave button");
let img = document.querySelector(".content_heal img");
const FileSaver = require('file-saver');
function getFileName(str){
    return str.substring(str.lastIndexOf('/') + 1);
}

btnDownload.addEventListener("click", () => {
    let imgPath = img.getAttribute('src');
    let fileName = getFileName(imgPath);

    FileSaver.saveAs(imgPath, fileName);
});*/
//const PORT = 5000;

app.use(express.static(__dirname +'/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname +'/index.html');
})

app.get("/afternoon", (req, res) => {
    res.sendFile(__dirname +'/afternoon.html');
})

app.get("/evening", (req, res) => {
    res.sendFile(__dirname +'/evening.html');
})

app.get("/night", (req, res) => {
    res.sendFile(__dirname +'/night.html');
})

app.get("/minimal", (req, res) => {
    res.sendFile(__dirname +'/minimal.html');
})
/*
io.on("connect", (socket) => {
    console.log("User connected");
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    })

    socket.on("disconnect", () => {
        console.log("User disconnected");
    })
})
*/

io.on("connect", (socket) => {
    socket.on('newuser', (name) => { 
        let newUser = name;
        console.log(`${newUser} connected`);

        socket.on('disconnect', () => { 
            console.log('User disconnected');
            io.emit('disconnected', `${newUser} disconnected`);
        })
    })

    socket.on('chat message', (msg) => { 
        io.emit('chat message', msg);
    })

})




const port = process.env.PORT || 4044;
server.listen(port);
console.log(`Server listening on port ${port}`);

/*
server.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`);
})
*/




