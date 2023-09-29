const express = require('express')
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");


router.get("/api/alquilers", async function (req, res, next) {
  let where = {}
    if (req.query.Nombre != undefined && req.query.Nombre != "") {
        where.Nombre = {
            [Op.like]: "%" + req.query.Nombre + "%"
        }
    } 
  let data = await db.alquilers.findAll({
    attributes: ["Codigo", "Nombre","Estado","Precio","Moneda","Domicilio","Pais",
    "Provincia","Localidad","Baños","Plantas","Antiguedad","Orientacion","SupTerreno","SupCubierta",
  "MtsFrente","MtsFondo","Propietario","Productor","Sucursal","Observaciones"],
    where,where
  });
  res.json(data);
});

module.exports = router
