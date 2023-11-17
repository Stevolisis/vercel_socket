const express=require('express');
const http=require('http');
require('dotenv').config();
const app=express();
const server=http.createServer(app);
const io=require('socket.io')(server,{
    cors:{
        origin:'http://localhost:5173',
        method:['GET','POST']
    }
});

server.listen(80,()=>{console.log('Server running at PORT 5173')});
console.log(process.env.CORS_ALLOW);
const botName = 'TalentChat Bot';
io.on("connection",(socket)=>{
    socket.emit("me",socket.id);

    // socket.on('join-room',(args)=>{
    //     const user = userJoin(socket.id,args.name,args.room);
    //     socket.join(user.room);
    //     io.to(user.room).emit('room-users',getRoomUsers(user.room));
    //     io.to(user.room).emit('getRoom',user.room);
    //     socket.emit('message',formatMessage(socket.id,botName,'Welcome to TalentChat'));
    //     socket.broadcast.to(user.room).emit('message', formatMessage(socket.id, botName, `${user.userName} has joined the chat`));

    //     socket.on('group-chat',(msg)=>{
    //         io.to(user.room).emit('message', formatMessage(user.id, user.userName, msg));
    //     });
    // });
});


app.get('/',(req,res)=>{
    res.send('Socket backend');
})