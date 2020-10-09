import http from "../http-common";

class DataService {
    getAll() {
        return http.get("/info");
    }
}

export default new DataService();