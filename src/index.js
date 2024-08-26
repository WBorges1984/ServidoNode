import express from 'express'
import cors from 'cors'
import routeUsuario from './routes/route.usuario.js';
import routeCategoria from './routes/route.categorias.js';

const app = express();
const porta = 8082;

app.use(express.json());
app.use(cors());

//Rotas
app.use(routeUsuario)
app.use(routeCategoria)



app.listen(porta,(req, res)=>{
    console.log("Servdor rodando na porta: ", porta)
})
