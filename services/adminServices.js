import http from "../http-common";

class AdminServices {
  login(usuario, contrasena) {
    return http.get(
      `/admin/login?usuario=${decodeURIComponent(
        usuario
      )}&contrasena=${contrasena}`
    );
  }
}

export default new AdminServices();
