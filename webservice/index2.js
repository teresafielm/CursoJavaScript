var express = require("express");
var app = express(); //crea una variable con toda la funcionalidad de express
var port = 8000;

app.get('/', (req, res) => {
    res.send("<h1>hola esto es un servicio N.1</h1>");
});

app.get('/saludo', (req, res) => {
    res.send("hola esto es un servicio N.2 y es un saludo");
});

app.get('/saludo2', (req, res) => {
    res.send("<html><body bgcolor=red>hola</body></html>");
});

app.listen(port, () => {
    console.log("El servidor esta eschando en el puerto" + port)
})
