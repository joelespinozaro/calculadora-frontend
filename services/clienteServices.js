import http from "../http-common";

class ClienteServices {
  login(usuario, contrasena) {
    return http.get(
      `/cliente/login?correo=${decodeURIComponent(
        usuario
      )}&contrasena=${contrasena}`
    );
  }

  save(data) {
    return http.post("/cliente/", data);
  }
}

export default new ClienteServices();
