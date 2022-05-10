import httpRequest from "../utils/dataServices/http-request";


class DashboardService {
  getAllDashboardData() {
    return httpRequest.get("/dashboard");
  }
}

export default new DashboardService();
