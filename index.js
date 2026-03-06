const express = require("express");
require("./conex");

//defino el puerto por el que se va a conectar el servidor
const PORT = 3000;

//creo mi servidor con express
const server = express();

//creo los endpoint que necesite
server.listen(PORT,()=>{
    console.log(`se ha conectado en http://localhost:${PORT}`);
})