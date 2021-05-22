import http from "../http-common";

class tipoEntidadServices {
  getAll() {
    return http.get("/tipo-financiera/");
  }
  save(data) {
    return http.post("/tipo-financiera/", data);
  }
}

export default new tipoEntidadServices();
