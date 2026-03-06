const mongoose = require('mongoose');

const user = 'santi34';
const password = 'valencia6';
const db = 'goodappetite';
const uri = `mongodb+srv://${user}:${password}@cluster0.0rq4uy9.mongodb.net/${db}?appName=Cluster0`

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('conectado a mongodb'))
    .catch((e)=> console.log('error de conexion', e));


//     import mongoose from 'mongoose';
// import dns from 'dns';

// dns.setDefaultResultOrder('ipv4first'); // ← Agrega esta línea

// export const connect = async () => {
//   try {
//     const bd = await mongoose.connect(process.env.DB_URL);
//     const { name, host } = bd.connection;
//     console.log(`Base de datos conectada: ${name} en el host: ${host}`);
//   } catch (error) {
//     console.log('Error al conectar a la base de datos:', error.message);
//     process.exit(1);
//   }
// };


///////////////////////////////////////////////
// const bd = await mongoose.connect(process.env.DB_URL, {
//   family: 4,
//   serverSelectionTimeoutMS: 5000,
// });