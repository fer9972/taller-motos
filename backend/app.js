//añadiendo express
const express = require("express");
const cors = require("cors");



//inicializar la libreria
const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Api de administración de matenimiento de motos");
  });


//ruta con su propio endpoint

const rutas_getion_motos = require("./routes/gestion-motos");
app.use(rutas_getion_motos);

const rutas_getion_usuarios = require("./routes/gestion-usuarios");
app.use(rutas_getion_usuarios);

const rutas_getion_mantenimiento = require("./routes/gestion-mantenimiento");
app.use(rutas_getion_mantenimiento);

//const rutas_verificacion = require("./routes/autenticacion");
//app.use(rutas_verificacion);



// Puerto
const port = 3001;
// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
    console.log(`Escuchando API en http://localhost:${port}`);
});