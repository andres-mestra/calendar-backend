import express from 'express';
import cors from 'cors'
require('dotenv').config()
import { dbConnection } from './database/config';
import auth from './routes/auth'


const app = express();

//Base de datos
dbConnection();

const PORT = process.env.PORT || 4000;

// CORS
app.use(cors())

//Directorio publico
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', auth );


app.listen( PORT , () => {
  console.log('Server en http://localhost:4000');
})