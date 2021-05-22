import CardEntidad from "./CardEntidad";
import EntidadServices from "../../services/entidadServices";
import { useEffect, useState } from "react";
export default function MantenimientoEntidad() {
  const [entidades, setEntidades] = useState();

  useEffect(() => {
    EntidadServices.getAll().then((data) => setEntidades(data.data));
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-full">
      <div className="py-8">
        <h1 className="text-2xl font-semibold">
          Mantenimiento Entidad Financiera
        </h1>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <div className="min-w-full leading-normal">
              <ul className="flex flex-col">
                {entidades &&
                  entidades.map((entidad, key) => (
                    <CardEntidad entidad={entidad} key={key} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
