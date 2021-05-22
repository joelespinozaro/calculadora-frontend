import http from "../http-common";

class ClienteServices {
  login(usuario, contrasena) {
    return http.get(
      `/cliente/login?correo=${decodeURIComponent(
        usuario
      )}&contrasena=${contrasena}`
    );
  }
}

export default new ClienteServices();
