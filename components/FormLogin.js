import { data } from "autoprefixer";
import { useState } from "react";
import AdminServices from "../services/adminServices";
import ClienteServices from "../services/clienteServices";

export default function FormLogin({ onClick, setUser }) {
  const [errorMsg, setErrorMsg] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const usuario = e.target.email.value;
    const contrasena = e.target.password.value;

    AdminServices.login(usuario, contrasena).then((data) =>
      data.data === null
        ? ClienteServices.login(usuario, contrasena).then((data) =>
            data.data === null
              ? setErrorMsg("usuario no existente.")
              : setUser(data.data)
          )
        : setUser(data.data)
    );
  };

  return (
    <form className="my-5" onSubmit={onSubmit}>
      <div className="my-4">
        <dt className="text-sm font-medium text-gray-500">
          Correo Electrónico
        </dt>
        <dd className="mt-1 text-sm text-gray-900 mb-4 sm:mt-0 sm:col-span-2">
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="off"
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Ingresar correo electrónico"
            required
          />
        </dd>
        <dt className="text-sm font-medium text-gray-500">Contraseña</dt>
        <dd className="mt-1 text-sm text-gray-900 mb-4 sm:mt-0 sm:col-span-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Ingresar contraseña"
            required
          />
        </dd>
      </div>
      <div className="flex justify-between">
        <button
          className="w-2/5 items-center rounded-md bg-blue-700 text-white font-bold py-2 col-span-2"
          type="submit"
        >
          Iniciar Sesión
        </button>
        <button
          className="w-2/5 items-center rounded-md text-blue-900 bg-blue-100 font-bold py-2 col-span-2"
          type="button"
          onClick={onClick}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
