import express from 'express';


const app = express();


//Directorio publico
app.use( express.static('public') );



app.listen(4000, () => {
  console.log('Server en http://localhost:4000');
})