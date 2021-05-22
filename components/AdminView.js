import { useEffect, useState } from "react";
import MantenimientoAsesor from "./Asesor/MantenimientoAsesor";
import MantenimientoEntidad from "./EntidadFinanciera/MantenimientoEntidad";
import MantenimientoTipo from "./TipoEntidadFinanciera/MantenimientoTipo";
import Sidebar from "./Sidebar";
export default function AdminView({ user, setResult }) {
  const [error, setError] = useState();
  const [menu, setMenu] = useState(1);
  return (
    <div className="flex">
      <Sidebar setMenu={setMenu} />
      {menu === 1 ? (
        <MantenimientoAsesor />
      ) : menu === 2 ? (
        <MantenimientoTipo />
      ) : (
        <MantenimientoEntidad />
      )}
    </div>
  );
}
