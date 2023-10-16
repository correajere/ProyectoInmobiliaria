import React from "react";


export default function AlquilerListado({
  Items,
  Consultar,
  Modificar,
  Pagina,
  RegistrosTotal,
  Paginas,
  Buscar,
  Borrar
}) {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-sm table-bordered table-striped">
        <thead>
          <tr>
            <th className="text-center">Codigo</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">Estado</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Moneda</th>
            <th className="text-center text-nowrap">Domicilio</th>
            <th className="text-center text-nowrap">Pais</th>
            <th className="text-center text-nowrap">Provincia</th>
            <th className="text-center text-nowrap">Localidad</th>
            <th className="text-center text-nowrap">Baños</th>
            <th className="text-center text-nowrap">Plantas</th>
            <th className="text-center text-nowrap">Antiguedad</th>
            <th className="text-center text-nowrap">Orientacion</th>
            <th className="text-center text-nowrap">SupTerreno</th>
            <th className="text-center text-nowrap">SupCubierta</th>
            <th className="text-center text-nowrap">MtsFrente</th>
            <th className="text-center text-nowrap">MtsFondo</th>
            <th className="text-center text-nowrap">Propietario</th>
            <th className="text-center text-nowrap">Productor</th>
            <th className="text-center text-nowrap">Sucursal</th>
            <th className="text-center text-nowrap">Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {Items &&
            Items.map((alquiler) => (
              <tr key={alquiler.Codigo}>
                <td>{alquiler.Codigo}</td>
                <td>{alquiler.Nombre}</td>
                <td className="text-end">{alquiler.Estado}</td>
                <td className="text-end">{alquiler.Precio}</td>
                <td className="text-end">{alquiler.Moneda}</td>
                <td className="text-end">{alquiler.Domicilio}</td>
                <td className="text-end">{alquiler.Pais}</td>
                <td className="text-end">{alquiler.Provincia}</td>
                <td className="text-end">{alquiler.Localidad}</td>
                <td className="text-end">{alquiler.Baños}</td>
                <td className="text-end">{alquiler.Plantas}</td>
                <td className="text-end">{alquiler.Antiguedad}</td>
                <td className="text-end">{alquiler.Orientacion}</td>
                <td className="text-end">{alquiler.SupTerreno}</td>
                <td className="text-end">{alquiler.SupCubierta}</td>
                <td className="text-end">{alquiler.MtsFrente}</td>
                <td className="text-end">{alquiler.MtsFondo}</td>
                <td className="text-end">{alquiler.Propietario}</td>
                <td className="text-end">{alquiler.Productor}</td>
                <td className="text-end">{alquiler.Sucursal}</td>
                <td className="text-end">{alquiler.Observaciones}</td>
                <td className="text-center text-nowrap">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    title="Consultar"
                    onClick={() => Consultar(alquiler)}
                  >
                    <i className="fa fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    title="Modificar"
                    onClick={() => Modificar(alquiler)}
                  >
                    <i className="fa fa-pencil"></i>
                  </button>

                  <button
                    className={"btn btn-sm btn-outline-danger"
                    }
                    title="Borrar"
                    onClick={() => Borrar(alquiler)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Paginador*/}
      <div className="paginador">
        <div className="row">
          <div className="col">
            <span className="pyBadge">Registros: {RegistrosTotal}</span>
          </div>
          <div className="col text-center">
            Pagina: &nbsp;
            <select
              value={Pagina}
              onChange={(e) => {
                Buscar(e.target.value);
              }}
            >
              {Paginas?.map((x) => (
                <option value={x} key={x}>
                  {x}
                </option>
              ))}
            </select>
            &nbsp; de {Paginas?.length}
          </div>
        </div>
      </div>
    </div>
  );
}
