import httpRequest from "../utils/dataServices/http-request";

class SeedDataService {
  getUsersData() {
    return httpRequest.get("/users");
  }

  getPrioritiesData() {
    return httpRequest.get("/priority");
  }
}

export default new SeedDataService();
