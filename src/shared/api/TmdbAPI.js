import Axios from "axios";

const TmdbAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});
