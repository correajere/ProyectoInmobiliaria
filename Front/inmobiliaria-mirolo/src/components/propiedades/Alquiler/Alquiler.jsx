import React, { useState, useEffect } from "react";
import AlquilerBuscar from "./AlquilerBuscar"
import AlquilerListado from "./AlquilerListado"
import AlquilerRegistro from "./AlquilerRegistro"
import { alquilerService } from "../../services/alquiler.service";
import axios from 'axios'

function Alquiler(){
    const TituloAccionCRUD = {
        A: "(Agregar)",
        B: "(Eliminar)",
        M: "(Modificar)",
        C: "(Consultar)",
        L: "(Listado)", 
    };

    const [AccionCRUD, setAccionCRUD] = useState("L")
    const [Nombre, setNombre] = useState("");
    const [Items, setItems] = useState(null);
    const [Item, setItem] = useState(null); // usado en BuscarporId (Modificar, Consultar)
    const [RegistrosTotal, setRegistrosTotal] = useState(0);
    const [Pagina, setPagina] = useState(4);
    const [Paginas, setPaginas] = useState([]);
    const [Equipos, setEquipos] = useState(null);

//Este hook se utiliza para realizar operaciones secundarias después de que 
//se haya renderizado el componente. En este caso, se usa para realizar una búsqueda de 
//alquiler.
// cargar al "montar" el componente, solo la primera vez (por la dependencia [])
    useEffect(() => {
        async function BuscarAlquiler() {
            let data = await alquilerService.Buscar('')
            setItems(data)
        }
        BuscarAlquiler()
    }, [])
    
    async function Buscar(_pagina) {
        if (_pagina && _pagina !== Pagina){
            setPagina(_pagina)
        }
        else{
            _pagina = Pagina
        }

        const data = await alquilerService.Buscar(Nombre);
        setItems(data);
        setRegistrosTotal(data.RegistrosTotal);


        const arrPaginas = [];
        for (let i = 1; i <= Math.ceil(data.RegistrosTotal / 10); i++){
            arrPaginas.push(i)
        }
        setPaginas(arrPaginas)
    }

    async function BuscarporId(item, accionCRUD) {
        const data = await alquilerService.BuscarporId(item)
        setItem(data)
        setAccionCRUD(accionCRUD)
    }

    function Consultar(item) {
        BuscarporId(item, "C")
    }

    function Modificar(item){
        BuscarporId(item, "M")
    }

    function Agregar() {
        setAccionCRUD("A")
        setItem({
            Codigo: 0,
            Nombre: null,
            Estado: null,
            Precio: 0,
            Moneda: null,
            Domicilio: null,
            Pais: null,
            Provincia: null, 
            Localidad: null,
            Baños: 0,
            Plantas: 0,
            Antiguedad: 0,
            Orientacion: null,
            SupTerreno: 0,
            SupCubierta: 0,
            MtsFrente: 0,
            MtsFondo: 0,
            Propietario: null,
            Productor: null,
            Sucursal: null,
            Observaciones: null
        })
    }

    

  async function Borrar(item) {
    const resp = window.confirm(
      "Está seguro que quiere borrar el registro?" 
    );
    if (resp) {
      await alquilerService.Borrar(item);
      await Buscar();
    }
  }

  async function Grabar(item) {
    // agregar o modificar
    try
    {
      await alquilerService.Grabar(item);
    }
    catch (error)
    {
      alert(error?.response?.data?.message ?? error.toString())
      return;
    }
    await Buscar();
    Volver();
  
    setTimeout(() => {
      alert(
        "Registro " +
          (AccionABMC === "A" ? "agregado" : "modificado") +
          " correctamente."
      );
    }, 0);
  }
  
  

  // Volver/Cancelar desde Agregar/Modificar/Consultar
  function Volver() {
    setAccionABMC("L");
  }

  
  return (
    <div>
      <div className="tituloPagina">
        Equipos <small>{TituloAccionCRUD[AccionCRUD]}</small>
      </div>
    
      {AccionCRUD === "L" && <AlquilerBuscar
        Nombre={Nombre}
        setNombre={setNombre}
        Buscar={Buscar}
        Agregar={Agregar}
      /> }

      {/* Tabla de resutados de busqueda y Paginador */}
      {AccionABMC === "L" && Items?.length > 0 && <AlquilerListado
        {...{
          Items,
          Consultar,
          Modificar,
          Pagina,
          RegistrosTotal,
          Paginas,
          Buscar,
          Borrar
        }}
      />}

        {AccionABMC === "L" && Items?.length === 0 && <div className="alert alert-info mensajesAlert">
        <i className="fa fa-exclamation-sign"></i>
        No se encontraron registros...
      </div>}

      {AccionABMC !== "L" && <AlquilerRegistro
        {...{ AccionABMC, Items, Item, Grabar, Volver }}
      />}
    </div>
  );
}

export {Alquiler}

