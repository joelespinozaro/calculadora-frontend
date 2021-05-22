import InputDefault from "../InputDefault";
import TipoEntidadServices from "../../services/tipoEntidadServices";
export default function CardTipo({ tipo }) {
  const Submit = (e) => {
    e.preventDefault();
    const body = {
      tipoId: e.currentTarget.id.value,
      descripcion: e.currentTarget.descripcion.value,
    };
    TipoEntidadServices.save(body);
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
            defaultValue={tipo.tipoId}
            disabled={true}
          />
        </div>
        <div className="flex-1 pl-1 md:mr-16">
          <InputDefault
            id="descripcion"
            label="descripcion"
            type="text"
            defaultValue={tipo.descripcion}
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
