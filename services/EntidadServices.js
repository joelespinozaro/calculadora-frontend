import http from "../http-common";

class EntidadServices {
  getAll() {
    return http.get("/entidad-financiera/");
  }

  save(data) {
    return http.post("/entidad-financiera/", data);
  }

  getEntidadByTasa(tasa1, tasa2) {
    return http.get(
      `/entidad-financiera/calculo-tasa/?tasa1=${tasa1}&tasa2=${tasa2}`
    );
  }
}
export default new EntidadServices();
