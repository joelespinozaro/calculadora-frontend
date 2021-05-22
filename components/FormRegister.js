import { useState } from "react";
import ClienteServices from "../services/clienteServices";

export default function FormRegister({ onClick, setUser }) {
  const [errorMsg, setErrorMsg] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      clienteId: e.target.dni.value,
      nombres: e.target.nombres.value,
      apellidos: e.target.apellidos.value,
      correoElectronico: e.target.email.value,
      telefono: e.target.telefono.value,
      contrasena: e.target.password.value,
    };

    ClienteServices.save(body).then((data) => setUser(data.data));
  };

  return (
    <form className="my-5" onSubmit={onSubmit}>
      <div className="my-4">
        <dt className="text-sm font-medium text-gray-500">Nombres</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <input
            id="nombres"
            name="nombres"
            type="text"
            autoComplete="off"
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Ingresar nombres"
            required
          />
        </dd>
      </div>
      <div className="my-4">
        <dt className="text-sm font-medium text-gray-500">Apellidos</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <input
            id="apellidos"
            name="apellidos"
            type="text"
            autoComplete="off"
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Ingresar apellidos"
            required
          />
        </dd>
      </div>
      <div className="my-4 flex justify-between">
        <div>
          <dt className="text-sm font-medium text-gray-500">DNI o RUC</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <input
              id="dni"
              name="dni"
              type="text"
              autoComplete="off"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Ingresar DNI o RUC"
              required
            />
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Teléfono</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <input
              id="telefono"
              name="telefono"
              type="text"
              autoComplete="off"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Ingresar teléfono"
              required
            />
          </dd>
        </div>
      </div>
      <div className="my-4">
        <dt className="text-sm font-medium text-gray-500">
          Correo Electrónico
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Ingresar correo electrónico"
            required
          />
        </dd>
      </div>
      <div className="my-4">
        <dt className="text-sm font-medium text-gray-500">Contraseña</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
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
          Registrarse
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
