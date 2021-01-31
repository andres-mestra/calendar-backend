import express from 'express';
require('dotenv').config()
import { dbConnection } from './database/config';
import auth from './routes/auth'


const app = express();

//Base de datos
dbConnection();


const PORT = process.env.PORT || 4000;

//Directorio publico
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', auth );


app.listen( PORT , () => {
  console.log('Server en http://localhost:4000');
})