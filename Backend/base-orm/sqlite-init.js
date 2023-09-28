
// acceder a la base usando aa-sqlite
const db = require("aa-sqlite");

async function CrearBaseSiNoExiste() {
  // abrir base, si no existe el archivo/base lo crea
  await db.open("./.data/alquiler.db");
  //await db.open(process.env.base);

  let existe = false;
  let res = null;

//--------Alquileres--------
res = await db.get(
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'alquiler'",
    []  
);
if (res.contar > 0) existe = true;
if (!existe) {
    await db.run(
        `CREATE table alquiler(Codigo INTEGER PRIMARY KEY AUTOINCREMENT
            , Nombre text NOT NULL 
            , Estado boolean NOT NULL
            , Precio float NOT NULL
            , Moneda text NOT NULL
            , Domicilio text NOT NULL
            , Pais text NOT NULL
            , Provincia text NOT NULL
            , Localidad text NOT NULL
            , Baños integer NOT NULL
            , Plantas integer NOT NULL
            , Antiguedad integer NOT NULL
            , Orientacion text NOT NULL
            , SupTerreno integer NOT NULL
            , SupCubierta integer NOT NULL
            , MtsFrente integer NOT NULL
            , MtsFondo integer NOT NULL
            , Propietario text NOT NULL
            , Productor text NOT NULL
            , Sucursal text NOT NULL
            , Observaciones text NOT NULL
            );`
            );

    console.log("Tabla de alquileres creada")

    await db.run(
      `INSERT INTO alquiler VALUES
      (99, 'Oficina en Alquiler de 1 Ambiente', true, 120.000, 'Ar', 'Av Duarte Quirós 620 2 6 - Alberdi', 'Argentina', 'Cordoba', 'Cordoba', 1, 2, 0,
       '-', 0, 0, 0, 0, '-', '- sin especificar -', 'No asignado', 'A');`
    );
    

    console.log("Tabla creada")
}
  // cerrar la base
  db.close();
}

CrearBaseSiNoExiste();

module.exports =  CrearBaseSiNoExiste;

