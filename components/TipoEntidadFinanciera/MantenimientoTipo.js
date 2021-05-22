import { useEffect, useState } from "react";
import CardTipo from "./CardTipo";
import TipoEntidadSerices from "../../services/tipoEntidadServices";

export default function MantenimientoAsesor() {
  const [tipos, setTipos] = useState();

  useEffect(() => {
    TipoEntidadSerices.getAll().then((data) => setTipos(data.data));
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-full">
      <div className="py-8">
        <h1 className="text-2xl font-semibold">
          Mantenimiento Tipo Entidad Bancaria
        </h1>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <div className="min-w-full leading-normal">
              <ul className="flex flex-col">
                {tipos &&
                  tipos.map((tipo, key) => <CardTipo tipo={tipo} key={key} />)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
