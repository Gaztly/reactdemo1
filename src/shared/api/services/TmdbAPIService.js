import http from "../TmdbAPI";

const GetFightClub = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return http.get(`550?api_key=${API_KEY}`);
};
