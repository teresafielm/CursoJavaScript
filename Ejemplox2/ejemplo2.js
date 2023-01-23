function registrarUsuario(req, res){
    var params = req.body;
    console.log(params);



    usuario.nombre = params.nombre;
    usuario.apellido = params.apellido;
    usurio.email = params.email;
    usuario.rol = 'Role_ADMIN';
    usuario.imagen = 'null';

    if(params.password){

        bcrypt.hash(params.password, 10, function(err, hash) {

            usuario.password =hash;
            if(usuario.nombre != null && usuario.apellido !=null && usuario.email !=null){
                //guardar el usuario en BD


                usuario.save((err,usuarioAlmacenado)=>{

                });

            }else {
                res.status(200).send({mesagge: 'Introduce todos los campos'});
            }

        });


    }else{
        res.status(404).send({message: 'Introduce la contraseña'});
    }
            }


