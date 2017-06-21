/* importar as configurações do servidor  */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(7000, function(){
    console.log('Server on');
    console.log('Port: 7000');
    console.log('url: http://localhost:7000');
})