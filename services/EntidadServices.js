import http from "../http-common";

class EntidadServices {
  getAll() {
    return http.get("/entidad-financiera/");
  }

  save(data) {
    return http.post("/entidad-financiera/", data);
  }
}

export default new EntidadServices();
