import axios from "axios";

class TeacherDataService {
    getAll() {
        return axios.get(`http://localhost:3000/api/lecturers`)
    }
}

export default new TeacherDataService();