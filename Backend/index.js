
const express = require("express");
const app = express();
const cors = require('cors')

// crear base si no existe
require("./base-orm/sqlite-init");  

// para poder leer json en el body
app.use(express.json()); 

// para entender texto
app.use(express.text()); 

// Configuración de CORS
app.use(cors());

// controlar ruta
app.get("/", (req, res) => {
  res.send("Proyecto inmobiliaria");
});

// levantar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`sitio escuchando en el puerto ${port}`);
});
