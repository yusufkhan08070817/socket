const express=require("express")
const socket=require("socket.io")
const app=express();
var PORT=process.env.PORT||3000
const server=app.listen(PORT)
app.use(express.static("public"))
console.log("server is running");
const io=socket(server)
var count=0
console.log("port number ",PORT);
io.on('connection',(socket)=>{
    console.log("new socket"+socket.id);
    socket.on('counter',()=>{
        count++;
        io.emit('counter',count)
    })
})
