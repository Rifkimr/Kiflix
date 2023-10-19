import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";
import NavigationBar from "./component/NavigationBar";
import LandingPage from "./component/landingpage";
import { Card } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

const App = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovie(results);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovie.map((movie, i) => {
      return (
        <Card className="Movie-wrapper" key={i}>
          <Card.Img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt="poster"
          />
          {/* <Card.Title className="Movie-title">{movie.title}</Card.Title>
          <Card.Text className="Movie-date">
            Realese :{movie.release_date}
          </Card.Text>
          <Card.Text className="Movie-rate">
            rate :{movie.vote_average}
          </Card.Text> */}
        </Card>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
    }
  };

  return (
    <div className="app">
      <div>
        <NavigationBar />
        <LandingPage />
      </div>
      <div className="view-recomen">
        <input
          className="Movie-search"
          placeholder="Cari film disini !"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </div>
    </div>
  );
};

export default App;
