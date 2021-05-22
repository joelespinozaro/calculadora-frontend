import InputDefault from "../InputDefault";
import EntidadServices from "../../services/entidadServices";

export default function CardEntidad({ entidad }) {
  const Submit = (e) => {
    e.preventDefault();
    const body = {
      entidadFinancieraId: e.currentTarget.id.value,
      nombre: e.currentTarget.nombre.value,
      direccion: e.currentTarget.direccion.value,
      telefono: e.currentTarget.telefono.value,
      tasaInteres: e.currentTarget.tasa.value,
      tipoId: entidad.tipoId,
    };
    EntidadServices.save(body);
  };
  return (
    <li className="flex flex-row">
      <form
        className=" select-none bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"
        onSubmit={Submit}
      >
        {console.log(entidad)}
        <div className="flex-1 pl-1 md:mr-5">
          <InputDefault
            id="id"
            label="id"
            type="text"
            defaultValue={entidad.entidadFinancieraId}
            disabled={true}
          />
        </div>
        <div className="flex-1 pl-2 md:mr-5">
          <InputDefault
            id="nombre"
            label="nombre"
            type="text"
            defaultValue={entidad.nombre}
          />
        </div>
        <div className="flex-1 pl-1 md:mr-5">
          <InputDefault
            id="direccion"
            label="direccion"
            type="text"
            defaultValue={entidad.direccion}
          />
        </div>
        <div className="flex-1 pl-1 md:mr-5">
          <InputDefault
            id="telefono"
            label="telefono"
            type="text"
            defaultValue={entidad.telefono}
          />
        </div>
        <div className="flex-1 pl-1 md:mr-5">
          <InputDefault
            id="tasa"
            label="tasa"
            type="number"
            step=".01"
            defaultValue={entidad.tasaInteres}
          />
        </div>
        <div className="flex-1 pl-1 md:mr-16">
          <InputDefault
            id="tipoId"
            label="Tipo Entidad"
            type="text"
            defaultValue={entidad.tipoEntidadFinanciera.descripcion}
            disabled={true}
          />
        </div>
        <div className="w-64 text-right flex justify-end content-end">
          <button
            className="w-32 mr-10 items-center rounded-md bg-blue-700 text-white font-bold py-2 col-span-2"
            type="submit"
          >
            Editar
          </button>
          <button
            className="w-32 items-center rounded-md text-blue-900 bg-blue-100 font-bold py-2 col-span-2"
            type="button"
          >
            Eliminar
          </button>
        </div>
      </form>
    </li>
  );
}
