import InputDefault from "../InputDefault";
import AsesorServices from "../../services/asesorServices";

export default function CardAsesor({ asesor }) {
  const Submit = (e) => {
    e.preventDefault();
    const body = {
      asesorId: e.currentTarget.id.value,
      nombres: e.currentTarget.nombres.value,
      apellidos: e.currentTarget.apellidos.value,
      telefono: e.currentTarget.telefono.value,
    };
    AsesorServices.save(body);
  };
  return (
    <li className="flex flex-row">
      <form
        className=" select-none bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"
        onSubmit={Submit}
      >
        <div className="flex-1 pl-1 md:mr-16">
          <InputDefault
            id="id"
            label="id"
            type="text"
            defaultValue={asesor.asesorId}
            disabled={true}
          />
        </div>
        <div className="flex-1 pl-1 md:mr-16">
          <InputDefault
            id="nombres"
            label="nombres"
            type="text"
            defaultValue={asesor.nombres}
          />
        </div>
        <div className="flex-1 pl-1 md:mr-16">
          <InputDefault
            id="apellidos"
            label="apellidos"
            type="text"
            defaultValue={asesor.apellidos}
          />
        </div>
        <div className="flex-1 pl-1 md:mr-16">
          <InputDefault
            id="telefono"
            label="telefono"
            type="text"
            defaultValue={asesor.telefono}
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
