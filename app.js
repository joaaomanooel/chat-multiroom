/* importar as configurações do servidor  */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(7000, function(){
    console.log('Server on');
    console.log('Port: 7000');
    console.log('URL: http://localhost:7000');
})

var io = require('socket.io').listen(server);
app.set('io', io); //<- Variavel global passada a partir da app
/**
 * criar a conexão por websocket
 */
io.on('connection', function(socket){
    socket.on('msgParaServidor', function(data){
        /**
         * Dialogo
         */
        socket.emit(
            'msgParaClientes',
            {apelido : data.apelido, msg: data.msg}    
        );
    
        socket.broadcast.emit(
            'msgParaClientes',
            {apelido : data.apelido, msg: data.msg}    
        );
        /**
         * Participantes
         */
        if(parseInt(data.apelido_atualizado) == 0){
            socket.emit(
                'participantesParaCliente',
                {apelido : data.apelido}    
            );
    
            socket.broadcast.emit(
                'participantesParaCliente',
                {apelido : data.apelido}    
            );
        }
    });
});