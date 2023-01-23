/*const services = require("express");

var webservices = services ();

webservices.use(services.json());//recibimos del cliente datos en JSOn
webservices.use(services.urlencoded()); //Codificamos la url
const ruta=require("path");



webservices.get('/peticion', (req,res)=>{

    req.temperatura=req.body.temperatura;
    res.sendFile(ruta.join(__dirname +"/html/index.html"));
});



webservices.listen(9090, ()=>{
    console.log("iniciando el servidor...");
} );

*/

var express = require('express');

var archivo = require('fs');

var app = express();
const ruta = require('path');
app.use(express.json());
app.use(express.urlencoded());

var t = null;

app.get('/', function(req, res) {
    res.sendFile(ruta.join(__dirname + '/html/index.html'));
});

// app.post('/ejemplo', function(req, res) {
//     let nombre = req.body.nombre;
//     res.send('dato recibido' + nombre);
// });
app.post('/respuesta', function(req, res) {

    

    let t = req.body.temperatura;
    let h = req.body.humedad;
    let c = req.body.co2;

    archivo.writeFile('datosT.txt',t,()=>{

        if (err){
            console.log(err);

        }else{
            console.log("Temperatura guardada");

        }
    });

    res.send("La temperatura: " + t +  " la humedad es:"+h + "Y el co2 es:" +c) ;
    console.log("Información enviada");
});


app.listen(9090, function() {
    console.log('Servidor corriendo en el puerto 9000');
});




/* Codigo propuesto/


var express = require('express');
var archivo = require('fs');
var app = express();
const ruta = require('path');
app.use(express.json());
app.use(express.urlencoded());
var t = null;

app.get('/', function(req, res) {
    res.sendFile(ruta.join(__dirname + '/html/index.html'));
});

// app.post('/ejemplo', function(req, res) {
//     let nombre = req.body.nombre;
//     res.send('dato recibido' + nombre);
// });

app.post('/respuesta', function(req, res) {
    t = t + "," + req.body.temperatura;
    let h = req.body.humedad;
    archivo.writeFile('datosT.txt', t, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("temperatura guardada");
        }
    });
    res.send("La temperatura es: " + t + "La humedad es:" + h);
});

app.listen(9000, function() {
    console.log('Servidor corriendo en el puerto 9000');
});


*/
