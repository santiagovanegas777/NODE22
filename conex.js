//const mongoose = require('mongoose');




const user = 'santi34';
const password = 'valencia6';
const db = 'alumnos';
//const uri = `mongodb+srv://${user}:${password}@cluster0.0rq4uy9.mongodb.net/${db}?appName=Cluster0`

// mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=>console.log('conectado a mongodb'))
//     .catch((e)=> console.log('error de conexion', e));

import mongoose from 'mongoose';
import { setDefaultResultOrder } from 'dns';

setDefaultResultOrder('ipv4first');

export const connect = async () => {
  try {
    console.log('Conectando a la base de datos...'); // ← ver si llega aquí
    
    const bd = await mongoose.connect(process.env.DB_URL, {
      family: 4,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });

    const { name, host } = bd.connection;
    console.log(`Base de datos conectada: ${name} en el host: ${host}`);
  } catch (error) {
    console.log('Error:', error.message); // ← ver el error exacto
    process.exit(1);
  }
};