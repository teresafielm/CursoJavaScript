const fs = require('fs');

var sensor="Buenos dias la temperatura es de 40C"

fs.writeFile("archivo.txt",sensor,function(err){ //se desencadena un callback
    if(err){
        console.log(err);

    }else{
        console.log("guardando la información");

    }

} );