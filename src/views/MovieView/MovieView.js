import Axios from "axios";
import { useState } from "react";

export const MovieView = () => {
  const [movie, setMovie] = useState();
  const [serverResponse, setServerResponse] = useState();
  const [input, setInput] = useState("550");
  const fetchData = async (id) => {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const API_URL = `https://api.themoviedb.org/3/movie/${input}?api_key=${API_KEY}`;
      const response = await Axios.get(API_URL);
      setServerResponse(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Movie View</h1>
      <input
        placeholder="Enter ID"
        onChange={(e) => setInput(e.target.value)}
      />
      <buttton onClick={() => fetchData()}>Find Movie</buttton>
      <h2>{serverResponse?.data?.title}</h2>
      <button onClick={() => fetchData()}>Fetch Data</button>
    </div>
  );
};
