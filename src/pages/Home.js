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
        <p>50% OFF INCLUDED</p>
        <h1>Book your favorite movies here !</h1>
        <h4>
          A film is - or should be - more like music than like fiction. It
          should be a progression of moods and feelings. The theme, what's
          behind the emotion, the meaning, all that comes later.
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
              {/* <CardContent>
                <h4>{movie.show.name}</h4>
                <p>⭐⭐⭐⭐</p>
              </CardContent> */}
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
  width: min(95%, 50rem);
  margin-inline: auto;
  padding: 3rem 0;
  @media (max-width: 600px) {
    p {
      font-size: 0.8em;
    }
  }
  * + * {
    margin-top: 0.8rem;
  }
  p {
    color: #00ed82;
  }
  h1 {
    font-size: 48px;
    font-weight: 800;
    @media (max-width: 600px) {
      font-size: 1.9em;
    }
  }
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    @media (max-width: 600px) {
      font-size: 1em;
    }
  }
`;

// section 2
const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  width: min(93%, 80rem);
  margin: 0 auto;
  padding: 2rem 0;
  @media (max-width: 1085px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Card = styled.div`
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scaleX(1.1) scaleY(1.1);
    img {
      opacity: 0.5;
    }
  }
  &:active {
    transform: scaleX(0.9) scaleY(0.9);
  }
  img {
    object-fit: cover;
    width: 100%;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
const CardContent = styled.div``;
