import CardAsesor from "./CardAsesor";
import { useEffect, useState } from "react";
import AsesorServices from "../../services/asesorServices";
export default function MantenimientoAsesor() {
  const [asesores, setAsesores] = useState();

  useEffect(() => {
    AsesorServices.getAll().then((data) => setAsesores(data.data));
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-full">
      <div className="py-8">
        <h1 className="text-2xl font-semibold">Mantenimiento Asesor</h1>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <div className="min-w-full leading-normal">
              <ul className="flex flex-col">
                {asesores &&
                  asesores.map((asesor, key) => (
                    <CardAsesor asesor={asesor} key={key} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
