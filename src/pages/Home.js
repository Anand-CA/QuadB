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
              <CardContent>
                <Controls>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="more"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                  </svg>
                </Controls>
                <h4>{movie.show.name}</h4>
                <Genres>
                  {movie?.show.genres?.map((genre) => (
                    <div className="genre">
                      <svg width="15" height="25">
                        <circle cx="50%" cy="50%" r="5" fill="#fcfcfc" />
                      </svg>
                      <span>{genre}</span>
                    </div>
                  ))}
                </Genres>
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

const Genres = styled.div`
  flex-flow: row wrap;
  display: flex;
  padding: 0.4rem 0 0 0;
  .genre {
    margin-right: 0.5em;
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      margin-right: 0.2em;
    }
    span {
      font-size: 0.6rem;
      margin-left: 0.5rem;
      @media (max-width: 600px) {
        font-size: 0.6rem;
      }
    }
  }
`;

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

const Controls = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 3rem;
  }
  .more {
    height: 2.5rem;
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

const CardContent = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0.6rem;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  h4 {
    font-weight: bold;
    font-size: 1.5em;
    @media (max-width: 600px) {
      font-size: 1em;
    }
  }
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scaleX(1.1) scaleY(1.1);
    img {
      opacity: 0.4;
    }
    ${CardContent} {
      opacity: 1;
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
