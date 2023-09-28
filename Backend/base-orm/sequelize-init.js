/* DESARROLLO DE LOS MODELOS DE DATOS
Alquileres : Rodriguez Saseta Valentin 
Jugadores : Fragerazzi Leo
Equipos : Correa Jeremías
 */

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:" + "./.data/alquiler.db");


// definicion del modelo de datos Alquileres
const alquileres = sequelize.define(
  "alquileres",
  {
    Codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nombre es requerido",
        },
        len: {
          args: [5, 60],
          msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
    },
    Estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Precio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Precio es requerido",
        },
      },
    },
    Moneda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "La moneda es requerida"
        }
      }
    },
    Domicilio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Domicilio es requerido",
        },

  },
    Pais: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Direccion es requerido",
        },
      },
  },
      Provincia: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Provincia es requerido",
          },
        },
    },
    Localidad: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Direccion es requerido",
        },
      },
    },
    Baños: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Baños es requerido",
        },
    }
  },
  Plantas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Largo es requerido",
      },
  }
},
      Antiguedad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Antiguedad es requerido",
          },
      }
      },
      Orientacion: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Orientacion es requerido",
          },
        },
      },
        SupTerreno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Sup Terreno es requerido",
          },
      }
      },
      SupCubierta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Sup. Cubierta es requerido",
          },
      }
      },
      MtrFrente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Mtr Frente es requerido",
          },
      }
      },
      MtrFondo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Mtr. Fondo es requerido",
          },
      }
      },
    Propietario: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Direccion es requerido",
        },
      },
  },
    Productor: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Direccion es requerido",
        },
      },
  },
    Sucursal: {
      // todo evitar que text autocomplete con espacios en blanco, deberia ser varchar sin espacios
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Direccion es requerido",
        },
      },
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Observaciones es requerido",
        },
      },
    }
  },
},
{
    timestamps: false,
})


module.exports = {
  sequelize,
  alquileres,
};
