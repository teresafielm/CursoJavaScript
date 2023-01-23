//Este web service hace un servidor web dónde se comunica y manda una respuesta, al mismo tiempo imprime el servidor (puerto) 

const http = require("http"); //Esta libreria sirve para crer un web services
const host = 'localhost'; //Definimos el servidor es nuestra propia computadora  
//Si este programa esta alojado en internet seria como se maneja const host = 'http://Zuriel.com'; 

const port=8000; //1-65535

const respuesta = function(req,res){
    //Una funcion llamada respuesta, cual seria la respuesta que le queremos dar al cliente
res.setHeader("Content-Type","text/html");

//que se envoara al cliente
res.end("Hola Bienvenido al servicio del backend")
}

const server= http.createServer(respuesta); //crea el servidor web con la respuesta
server.listen(port,host,()=>{

    console.log("El servidor esta corriendo en el puerto" + port);

});