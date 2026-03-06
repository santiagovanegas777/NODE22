const mongoose = require('mongoose');

const user = 'santi34';
const password = 'valencia6';
const db = 'goodappetite';
const uri = `mongodb+srv://${user}:${password}@cluster0.0rq4uy9.mongodb.net/${db}?appName=Cluster0`

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('conectado a mongodb'))
    .catch((e)=> console.log('error de conexion', e));