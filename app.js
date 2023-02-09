import express from 'express';
import hbs from 'hbs';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// !ESTO ES PARA USAR EL DIRNAME
import path, { dirname } from 'path';
const __dirname = path.resolve();

const app = express();
const port = process.env.PORT;


// !HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// !Servir Contenido Estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Mandar Argumentos
    res.render('home',{
        nombre: 'Daniel',
        titulo: 'Curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Daniel',
        titulo: 'Curso de node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Daniel',
        titulo: 'Curso de node'
    });
});

app.get('*', (req, res) => {
    // !ENVIAR ARCHIVO HTML DESDE EL PUBLIC
    res.sendFile(__dirname + '/public/404.html');
  });

app.listen(port,()=>{
    console.log(`Puerto Corriendo con Normalidad en ${port}`);
});