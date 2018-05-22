import listen from 'socket.io';
import app from './config/server';

const server = app.listen(7000, () => {
  console.log(`
---> Server on
---> Port: 7000
---> URL: http://localhost:7000
  `);
});

const io = listen(server);
app.set('io', io);
io.on('connection', (socket) => {
  socket.on('msgParaServidor', (data) => {
    socket.emit(
      'msgParaClientes',
      {
        userName: data.userName,
        msg: data.msg
      }
    );
    socket.broadcast.emit(
      'msgParaClientes',
      {
        userName: data.userName,
        msg: data.msg
      }
    );
    const newUserName = parseInt(data.newUserName, 10);
    if (newUserName === 0) {
      socket.emit(
        'participantesParaCliente',
        { userName: data.userName }
      );
      socket.broadcast.emit(
        'participantesParaCliente',
        { userName: data.userName }
      );
    }
  });
});
