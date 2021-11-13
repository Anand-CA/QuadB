import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
      setMovies(res.data);
    });
  }, []);
  console.log(movies);
  return (
    <Container>
      <Head>
        <p>2021 MOVIES INCLUDED</p>
        <h1>Find your favorite movies here !</h1>
        <h4>
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.
        </h4>
      </Head>

      <Grid>
        {movies.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to={`/${movie.show.id}`}
          >
            <Card>
              <img src={movie.show.image.medium} alt="movie" />
              <CardContent>
                <h4>{movie.show.name}</h4>
                <p>⭐⭐⭐⭐</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

// section 1
const Head = styled.div`
  text-align: center;
  padding: 2rem 1rem 5rem 1rem;
  * + * {
    margin-top: 0.8rem;
  }
  p {
    color: #00ed82;
  }
  h1 {
    font-size: 48px;
    font-weight: 800;
  }
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    /* margin-bottom: 5em; */
  }
`;

// section 2
const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  width: min(95%, 80rem);
  margin: 0 auto;
`;
const Card = styled.div`
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
const CardContent = styled.div``;
