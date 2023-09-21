import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "070c8fb6860e4b8e86d25c45cc37e438" },
});
