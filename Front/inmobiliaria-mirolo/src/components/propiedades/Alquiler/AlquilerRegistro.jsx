import React, { useEffect } from "react";
import { useForm } from "react-hook-form";


export default function AlquilerRegistro({
  AccionCRUD, 
  Items,
  Item,
  Grabar,
  Volver,
}) {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, isValid, isSubmitted },
    } = useForm({ defaultValues: Item });
    
  const onSubmit = (data) => {
    Grabar(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid">

        <fieldset disabled={AccionCRUD === "C"}>

          {/* campo nombre */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Nombre">
                Nombre<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                {...register("Nombre", {
                  required: { value: true, message: "Nombre es requerido" },
                  minLength: {
                    value: 5,
                    message: "Nombre debe tener al menos 5 caracteres",
                  },
                  maxLength: {
                    value: 60,
                    message: "Nombre debe tener como máximo 55 caracteres",
                  },
                })}
                autoFocus
                className={
                  "form-control " + (errors?.Nombre ? "is-invalid" : "")
                }
              />
              {errors?.Nombre && touchedFields.Nombre && (
                <div className="invalid-feedback">
                  {errors?.Nombre?.message}
                </div>
              )}
            </div>
          </div>

            {/* campo Estado */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Estado">
                Estado<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="checkbox"
                {...register("Estado", {
                    required: { value: true, message: "Estado es requerido" }
                })}
                className={"form-check-input " + (errors?.Estado ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Estado?.message}</div>
            </div>
           </div>

            {/* campo Precio */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Precio">
                Precio<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="number"
                step="0.01" // Para permitir dos decimales
                {...register("Precio", {
                    required: { value: true, message: "Precio es requerido" },
                    min: { value: 0, message: "El precio debe ser mayor o igual a 0" }, // Precio no puede ser negativo
                })}
                className={"form-control " + (errors?.Precio ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Precio?.message}</div>
            </div>
            </div>

            {/* campo Moneda */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Moneda">
                Moneda<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Moneda", {
                    required: { value: true, message: "Moneda es requerida" },
                    pattern: {
                    value: /^\d+(\.\d{1,2})?$/, // Expresión regular para validar formato de moneda
                    message: "Formato de moneda inválido. Use el formato: 0.00",
                    },
                })}
                className={"form-control " + (errors?.Moneda ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Moneda?.message}</div>
            </div>
            </div>

            {/* campo Domicilio */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Domicilio">
                Domicilio<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Domicilio", {
                    required: "Domicilio es requerido",
                })}
                className={"form-control " + (errors?.Domicilio ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Domicilio?.message}</div>
            </div>
            </div>

            {/* campo Pais */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Pais">
                Pais<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Pais", {
                    required: "Pais es requerido",
                })}
                className={"form-control " + (errors?.Pais ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Pais?.message}</div>
            </div>
            </div>

            {/* campo Provincia */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Provincia">
                Provincia<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Provincia", {
                    required: "Provincia es requerido",
                })}
                className={"form-control " + (errors?.Provincia ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Provincia?.message}</div>
            </div>
            </div>

            {/* campo Localidad */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Localidad">
                Localidad<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Localidad", {
                    required: "Localidad es requerido",
                })}
                className={"form-control " + (errors?.Localidad ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Localidad?.message}</div>
            </div>
            </div>

            {/* Campo Baños */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Baños">
                Baños<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="number"
                {...register("Banos", {
                    required: "Baños es requerido",
                    min: {
                    value: 0,
                    message: "El número de baños no puede ser menor a 0",
                    },
                })}
                className={"form-control " + (errors?.Baños ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Baños?.message}</div>
            </div>
            </div>


            {/* Campo Plantas */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Plantas">
                Plantas<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="number"
                {...register("Plantas", {
                    required: "Plantas es requerido",
                    min: {
                    value: 0,
                    message: "El número de Plantas no puede ser menor a 0",
                    },
                })}
                className={"form-control " + (errors?.Plantas ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Plantas?.message}</div>
            </div>
            </div>

            {/* Campo Antiguedad */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Antiguedad">
                Antiguedad<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="number"
                {...register("Antiguedad", {
                    required: "Antiguedad es requerido",
                    min: {
                    value: 0,
                    message: "El número de Antiguedad no puede ser menor a 0",
                    },
                })}
                className={"form-control " + (errors?.Antiguedad ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Antiguedad?.message}</div>
            </div>
            </div>

            {/* campo Orientacion */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Orientacion">
                Orientacion<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Orientacion", {
                    required: "Orientacion es requerido",
                })}
                className={"form-control " + (errors?.Orientacion ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Orientacion?.message}</div>
            </div>
            </div>


            {/* Campo SupTerreno */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="SupTerreno">
                SupTerreno<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="number"
                {...register("SupTerreno", {
                    required: "SupTerreno es requerido",
                    min: {
                    value: 0,
                    message: "El número de SupTerreno no puede ser menor a 0",
                    },
                })}
                className={"form-control " + (errors?.SupTerreno ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.SupTerreno?.message}</div>
            </div>
            </div>

            {/* Campo SupCubierta */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="SupCubierta">
                SupCubierta<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="number"
                {...register("SupCubierta", {
                    required: "SupCubierta es requerido",
                    min: {
                    value: 0,
                    message: "El número de SupCubierta no puede ser menor a 0",
                    },
                })}
                className={"form-control " + (errors?.SupCubierta ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.SupCubierta?.message}</div>
            </div>
            </div>


            {/* Campo MtrFrente */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="MtrFrente">
                MtrFrente<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="number"
                {...register("MtrFrente", {
                    required: "MtrFrente es requerido",
                    min: {
                    value: 0,
                    message: "El número de MtrFrente no puede ser menor a 0",
                    },
                })}
                className={"form-control " + (errors?.MtrFrente ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.MtrFrente?.message}</div>
            </div>
            </div>

            {/* Campo MtrFondo */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="MtrFondo">
                MtrFondo<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="number"
                {...register("MtrFondo", {
                    required: "MtrFondo es requerido",
                    min: {
                    value: 0,
                    message: "El número de MtrFondo no puede ser menor a 0",
                    },
                })}
                className={"form-control " + (errors?.MtrFondo ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.MtrFondo?.message}</div>
            </div>
            </div>         



            {/* campo Propietario */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Propietario">
                Propietario<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Propietario", {
                    required: "Propietario es requerido",
                })}
                className={"form-control " + (errors?.Propietario ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Propietario?.message}</div>
            </div>
            </div>

            {/* campo Productor */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Productor">
                Productor<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Productor", {
                    required: "Productor es requerido",
                })}
                className={"form-control " + (errors?.Productor ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Productor?.message}</div>
            </div>
            </div>


            {/* campo Sucursal */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Sucursal">
                Sucursal<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Sucursal", {
                    required: "Sucursal es requerido",
                })}
                className={"form-control " + (errors?.Sucursal ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Sucursal?.message}</div>
            </div>
            </div>


            {/* campo Observaciones */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="Observaciones">
                Observaciones<span className="text-danger">*</span>:
                </label>
            </div>
            <div className="col-sm-8 col-md-6">
                <input
                type="text"
                {...register("Observaciones", {
                    required: "Observaciones es requerido",
                })}
                className={"form-control " + (errors?.Observaciones ? "is-invalid" : "")}
                />
                <div className="invalid-feedback">{errors?.Observaciones?.message}</div>
            </div>
            </div>

        </fieldset>

        {/* Botones Grabar, Cancelar/Volver' */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionCRUD !== "C" && (
              <button type="submit" className="btn btn-primary mx-3">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning mx-3"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionCRUD === "C" ? " Volver" : " Cancelar"}
            </button>
          </div>
        </div>

        {/* texto: Revisar los datos ingresados... */}
        {!isValid && isSubmitted && (
          <div className="row alert alert-danger mensajesAlert">
            <i className="fa fa-exclamation-sign"></i>
            Revisar los datos ingresados...
          </div>
        )}

      </div>
    </form>
  );
}
