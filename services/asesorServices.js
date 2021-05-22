import http from "../http-common";

class AsesorServices {
  getAll() {
    return http.get("/asesor/");
  }

  save(data) {
    return http.post("/asesor/", data);
  }
}

export default new AsesorServices();
