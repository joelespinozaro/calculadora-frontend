import http from "../http-common";

class CalculadoraServices {
  getAll() {
    return http.get("/calculo/");
  }

  save(data) {
    return http.post("/calculo/", data);
  }

  getCalculo(id) {
    return http.get(`/calculo/${id}`);
  }
}

export default new CalculadoraServices();
