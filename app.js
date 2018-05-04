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
        apelido: data.apelido,
        msg: data.msg
      }
    );
    socket.broadcast.emit(
      'msgParaClientes',
      {
        apelido: data.apelido,
        msg: data.msg
      }
    );
    const apelidoAtualizado = parseInt(data.apelido_atualizado, 10);
    if (apelidoAtualizado === 0) {
      socket.emit(
        'participantesParaCliente',
        { apelido: data.apelido }
      );
      socket.broadcast.emit(
        'participantesParaCliente',
        { apelido: data.apelido }
      );
    }
  });
});
