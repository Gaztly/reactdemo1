import { useState, useEffect } from "react";
import TmdbAPIService from "../../shared/api/services/TmdbAPIService";

import { Card, Spinner, Button } from "react-bootstrap";
export const FindMovieView = () => {
  const [serverData, setServerData] = useState();
  const imageURL = "https://image.tmdb.org/t/p/w500";
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  //   const fetchData = async () => {
  //     // const response = await TmdbAPIService.GetFightClub();
  //     // setServerData(response.data);
  //     const { data } = await TmdbAPIService.GetFightClub();
  //     setServerData(data.results);
  //     setIsLoaded(true);
  //   };

  const findMovie = async () => {
    setIsLoaded(false);
    try {
      const { data } = await TmdbAPIService.findMoviesByTitle(input);
      setServerData(data.results);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  const displayData = () => {
    return isLoaded ? (
      <div>
        {serverData.map((movie) => (
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src={`${imageURL}${movie?.poster_path}`}
              alt="Movie poster"
            />
            <Card.Body>
              <Card.Title>{movie?.title}</Card.Title>

              <Card.Text>{movie?.runtime}</Card.Text>

              <Button variant="primary">See more</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    ) : (
      <div>
        <h2>
          <Spinner animation="border" />
        </h2>
      </div>
    );
  };
  useEffect(() => {}, []);

  return (
    <main>
      <section>
        <h1>Find A Movie</h1>
        <input
          placeholder="Enter Movie Title"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => findMovie()}>Find Movie</button>

        {displayData()}
      </section>
    </main>
  );
};
