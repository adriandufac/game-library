import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : 'b346a6e1f5a144b9bd89e1708f809dc1'
    }
})