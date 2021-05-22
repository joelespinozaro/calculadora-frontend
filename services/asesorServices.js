import http from "../http-common";

class AsesorServices {
  getAll() {
    return http.get("/asesor/");
  }

  save(data) {
    return http.post("/asesor/", data);
  }

  getAsesor(id) {
    return http.get(`/asesor/${id}`);
  }
}

export default new AsesorServices();
