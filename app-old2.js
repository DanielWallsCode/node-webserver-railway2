import express from 'express';

// !ESTO ES PARA USAR EL DIRNAME
import path from 'path';
const __dirname = path.resolve();

const app = express();
const port = 8080;

// !Servir Contenido Estatico
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta');
});

app.get('*', (req, res) => {
    // !ENVIAR ARCHIVO HTML DESDE EL PUBLIC
    res.sendFile(__dirname + '/public/404.html');
  });

app.listen(port,()=>{
    console.log(`Puerto Corriendo con Normalidad en ${port}`);
});