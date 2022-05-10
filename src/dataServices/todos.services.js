import httpRequest from "../utils/dataServices/http-request";

class TodosDataService {
  getAllTodosData() {
    return httpRequest.get("/todos");
  }

  get(id) {
    return httpRequest.get(`/Todos/${id}`);
  }

  // create(data) {
  //   return httpRequest.post("/Todos", data);
  // }

  // update(id, data) {
  //   return httpRequest.put(`/Todos/${id}`, data);
  // }

  // delete(id) {
  //   return httpRequest.delete(`/Todos/${id}`);
  // }
}

export default new TodosDataService();
