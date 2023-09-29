
// acceder a la base usando aa-sqlite
const db = require("aa-sqlite");

async function CrearBaseSiNoExiste() {
  // abrir base, si no existe el archivo/base lo crea
  await db.open("./.data/alquilers.db");
  //await db.open(process.env.base);

  let existe = false;
  let res = null;

//--------Alquileres--------
res = await db.get(
  "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'alquilers'",
  []
);

if (res.contar > 0) existe = true;
if (!existe) {
    await db.run(
        `CREATE table alquilers(Codigo INTEGER PRIMARY KEY AUTOINCREMENT
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
      `INSERT INTO alquilers VALUES
      (99, 'Oficina en Alquiler de 1 Ambiente', true, 120.000, 'Ar', 'Av Duarte Quirós 620 2 6 - Alberdi', 'Argentina', 'Cordoba', 'Cordoba', 1, 2, 0, '-', 0, 0, 0, 0, '-', '- sin especificar -', 'No asignado', 'A'),

      (44, 'Local en Alquiler de 1 Ambiente', true, 68.000, 'Ar', 'ENFERMERA CLERMONT 175 LOCAL - Alberdi', 'Argentina', 'Cordoba', 'Cordoba', 1, 1, 11, '-', 0, 0, 0, 0, '-', '- sin especificar -', 'No asignado', 'LOCAL COMERCIAL UBICADO EN ENFERMERA CLERMONT 175 ALBERDI CON AUMENTO CADA 3 MESES SIN EXPENSAS'),
       
      (98, 'Oficina en Alquiler de 1 Ambiente', true, 15.000, 'Ar', 'GENERAL PAZ 94 7 6 - General Paz', 'Argentina', 'Cordoba', 'Cordoba', 1, 0, 12, '-', 0, 0, 0, 0, '-', '- sin especificar -', 'No asignado', 'Oficina dividida en 2 espacios, ventana con vista a general paz, cuenta con ascensor y escalera. Excelente ubicación. Alquiler $15mil, expensas $10.000, Aumento cada 4 meses'),
      
      (81,'Local en alquiler de 1 ambiente', true, 360000, 'Ar$', 'Caseros 988 - Centro', 'Argentina', 'Cordoba', 'Cordoba', 6, 3,35, '-',0,864,20,0, '-', '- sin especificar', 'No asignado', 'LOCAL comercial con 860mts en el centro de Córdoba. -Superficie total 863m -20m de frente -320m en planta baja -Primer piso con 6 oficinas con una sup. de 320 m -Subsuelo de 225m -Persiana metálica ciega en todo el frente -Ingreso vehicular para carga y descarga -Monta carga'),

      (135, 'Depto en Alquiler de 2 Dor', true, 190000, 'Ar$', 'Rivera Indarte 670 3 A - Centro', 'Argentina', 'Cordoba', 'Cordoba',2,1,0,'-',70,0,0,0, '-','- sin especificar', 'No asignado', 'Se alquila un departamento hermoso y enorme en B° Centro de la ciudad de Córdoba. Precio: $190.000 Cuenta con: - 2 dormitorios con placard - 2 baños - Living comedor - Cocina separada, con lavadero incluido - Terraza de 30m2 - Todos los servicios Ubicación: Rivera Indarte 670, piso 3 depto "A", B° Centro'),

      (120, 'Local en alquiler de 1 ambiente', true, '55000', 'Ar$', 'Lima 321 - General Paz', 'Argentina', 'Cordoba', 'Cordoba', 1, 0, -1, '-', 0,0,0,0,'-','- sin especificar','No asignado', 'LOCAL EN ALQUILER B° GRAL PAZ. SIN EXP Cuenta con persiana de enrollar por dentro, 1 baño, luz activa, agua $2200. El alquiler es de $55000, con renta y municipalidad, mas el %60 semestral del primer año. Contrato por 2 años. En el segundo año alguna clausula de IPC')

      ;`
    );

    console.log("Tabla creada") }
    

/* -------------------------------------- VENTAS -------------------------------------- */
let existe2 = false;
let res2 = null;

res2 = await db.get(
  "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'venta'",
  []
);
if (res2.contar > 0) existe2 = true;
if (!existe2) {
  await db.run(
    `CREATE table venta(Codigo INTEGER PRIMARY KEY AUTOINCREMENT
      , Nombre text NOT NULL 
      , Estado boolean NOT NULL  
      , Precio float NOT NULL
      , Moneda text NOT NULL
      , Domicilio text NOT NULL 
      , Pais text NOT NULL
      , Provincia text NOT NULL
      , Localidad text NOT NULL
      , AptoCredito text NOT NULL
      , Baños integer NOT NULL
      , Plantas integer NOT NULL
      , Antiguedad integer NOT NULL
      , Orientacion text NOT NULL
      , SupTerraza integer NOT NULL
      , SupBalcon integer NOT NULL
      , SupJardin integer NOT NULL
      , OtrasSuperficies integer NOT NULL
      , SupTerreno integer NOT NULL
      , SupCubierta integer NOT NULL
      , MtsFrente integer NOT NULL
      , MtsFondo integer NOT NULL
      , Propietario text NOT NULL
      , Productor text NOT NULL
      , Sucursal text NOT NULL
      , AsesorComercial text NOT NULL
      , Observaciones text NOT NULL
      );`
      );
  console.log("tabla venta creada!");
  
  //Tengo que tener 22 valores

  await db.run(
    `INSERT INTO venta VALUES
      (122, 'Casa en venta de 2 dormitorios', 'true', 130.000, 'Us$', 'Chimu 8394 - Villa Serrana', 'Argentina',
      'Cordoba', 'Cordoba', 'NO', 2, 1, 0, '-',0 ,0 ,0 ,0, 0, 200, 0, 0, '-', '-sin especificar-', 'No asignado', 'No asignado',
      'El terreno comprende dos lotes. un lote de 800 m2 que tiene escritura y otro lote lateral de 400 m2 con cesion.
      La propiedad tambien se ofrece para alquiler $ 170.000.-'),

      (40, 'Duplex en venta de 3 dormitorios | 9 ambientes', true, 140.000, 'Us$', 'Cañada de Gómez 00 - Solares de Manantiales', 
      'Argentina', 'Cordoba', 'Cordoba', 'NO', 3, 2, 0, 'Norte', 0, 0, 0, 0, 320, 170, 0, 0, '-', '-sin especificar-', 'No asignado', 
      'Mariana Mirolo', 'Se vende DUPLEX hermoso y moderno de 3 dormitorios con piscina. '),

      (126, 'Casa en venta de 2 Dormitorios | 3 Ambientes ', true, 43.000, 'Us$', 'Publica 11 486 - Carrara de Horizonte', 
      'Argentina', 'Cordoba', 'Cordoba', 'NO', 1, 1, 6, '-', 0, 0, 0, 0, 147, 70, 0, 0, '-', '-sin especificar-', 'No asignado', 
      'Mariana Mirolo', 'Descripción:
      La propiedad de distribuye en una sola planta
      - Cochera descubierta
      - Cocina Comedor
      - 2 dormitorios
      - Baño completo
      - Patio Amplio
      - Rejas en toda la casa
      - Alarma
      - El plan se encuentra CANCELADO 100 % y también tiene pago el PCI
      - Actualmente se encuentra alquilado con contrato vigente hasta Marzo del 2026 con una renta mensual de $ 75.000.'),

      (131, 'Casa en venta de 1 dormitorio | 2 ambientes', true, 45.000, 'Us$', 'Calle 83 Lote 5 ESTANCIA VIEJA', 
      'Argentina', 'Cordoba', 'Cordoba', 'SI', 1, 1, 0, '-', 0, 0, 0, 0, 0, 65, 0, 0, '-', '-sin especificar-', 'No asignado', 
      'Mariana Mirolo', 'Excelente vista, a dos cuadras del Río, a 10 min. de Carlos paz.
      Cuenta con una AMPLIACION al 40% de avance de obra (3 cuartos; un dormitorio con baño en suit, vestidor y espacio de home office separado)
        -65m2 construidos, 55m2 más para ampliación.
        -Tiene escritura y planos aprobados de los primeros 65m2 construidos, los 55m2 de ampliación a terminar, 
        -Tienen planos hechos, pero no presentados. Es APTO CREDITO BANCOR.'),

      
      (103, 'Galpon en venta de 2 dormitorios ', true, 170.000, 'Us$', 'Av. Duarte Quirós 3652 - Alto Alberdi', 
      'Argentina', 'Cordoba', 'Cordoba', 'NO', 1, 2, 10, 'Norte', 0, 0, 0, 0, 376, 308, 0, 0, '-', '-sin especificar-', 'No asignado', 
      'Mariana Mirolo', 'La propiedad cuenta con:
      - Un GALPON con oficina.
      - Un DEPARTAMENTO: se accede por escalera y posee 2 balcones en el frente, living amplio, comedor separado con salida a la terraza, cocina separada, 1 baño completo, 2 habitaciones con placar, terraza amplio con galeria y asador.
      Superficie cubierta: 308 m2.
      Superficie total: 376 m2.
     
      Por la normativa es un terreno apto construccion:
      
      - Perfil / Zona: G3.
      - Factor de ocupación superficial FOS: 70%. Superficie máxima FOS 70%:m2 (teniendo en cuenta la superficie registrada en la municipalidad      
      - Factor de ocupación total FOT: 2. Superficie máxima FOT 2:m2 (según registro municipal)
      - Máxima cantidad de Pisos: Planta Baja+3 pisos.
      - Unidades Funcionales: Número de unidades funcionales: 1 cada 100m2 de superficie de parcela; 1 cada 100m2 del FOT (solo para parcelas que dispongan de factibilidad de conexión a la Red Cloacal).
      Posibles distribuciones:

      Con posibilidad de Red cloacal:
      - Con esta configuración se podrían hacer dos locales comerciales en planta baja (PB) + circulaciones y dos unidades de vivienda en planta alta (PA). Cantidad de metros cuadrados totales: 330m2;
      - Otra opción es hacer dos locales comerciales (de doble altura) + entrepiso (depósito) y en primer nivel dos unidades de vivienda. Cantidad de metros cuadrados: 410m2.
      Sin conexión a Red cloacal:
      - También está la posibilidad de hacer un local comercial en PB (+primer piso) y una unidad de vivienda en segundo nivel.
      En cualquier opción no se podrá superar losm2 de FOT. Ni los 13,50m de altura máxima.'),

      (106, 'Depto en venta de 2 dormitorios', true, 140.000, 'Us$', 'Juan Manuel Lanza N° 3685 3685 - Alto Alberdi', 
      'Argentina', 'Cordoba', 'Cordoba', 'NO', 3, 2, 2, '-', 0, 0, 0, 0, 749, 427, 0, 0, '-', '-sin especificar-', 'No asignado', 
      'Mariana Mirolo', 'Gran propiedad en venta en calle Juan Manuel Lanza N° 3685, Alto Alberdi.

      1) GALPON: con doble acceso.
      2) DEPARTAMENTOS:
      - Un monoambiente en planta alta; se ingresa por escalera.
      - Un departamento en planta alta; se ingresa por escalera y cuenta con 2 dormitorios, living comedor con cocina separada, y 1 baño completo.
      3) VESTUARIO: en planta baja con 1 baño completo.
      4) CASA/OFICINA: cocina kitchenet, 2 habitaciones 1 baño completo. ')
      ;`
  );
  console.log("Tabla de ventas cargada a la base");
};


  // cerrar la base
  db.close();
}

CrearBaseSiNoExiste();

module.exports =  CrearBaseSiNoExiste;

