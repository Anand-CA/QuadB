import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled, { keyframes } from "styled-components";
import ReactHtmlParser from "react-html-parser";
import StarRatings from "react-star-ratings";
import Modal from "../components/Modal";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(`https://api.tvmaze.com/shows/${id}`, {
        cancelToken: cancelTokenSource.token,
      })
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      });

    return () => {
      cancelTokenSource.cancel();
    };
  }, [id]);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Container bgImage={movie?.image?.original}>
        <Content>
          <h1>{movie.name}</h1>
          <p>{ReactHtmlParser(movie.summary)}</p>
          <Genres>
            {movie?.genres?.map((genre) => (
              <div className="genre">
                <svg width="15" height="25">
                  <circle cx="50%" cy="50%" r="8" fill="#fcfcfc" />
                </svg>
                <span>{genre}</span>
              </div>
            ))}
            <Star>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{movie?.rating?.average || 4.5}</span>
            </Star>
          </Genres>

          <Language>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            <p>{movie.language}</p>
          </Language>

          <button onClick={() => setShowModal(true)}>Book your ticket</button>
        </Content>
      </Container>
    </>
  );
};

export default Detail;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.3;
    background: url(${(props) => props.bgImage}) no-repeat center center / cover;
    z-index: -1;
    filter: blur(2px);
  }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Content = styled.div`
  padding: 6%;
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    animation: ${fadeIn} 0.5s ease-in-out;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.4rem;
    animation: ${fadeIn} 0.5s ease-in-out;
    max-width: 60rem;
    @media (max-width: 768px) {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
    }
    @media (max-width: 600px) {
      font-size: 1rem;
      line-height: 1.5em;
    }
  }
  button {
    padding: 1rem 2rem;
    background: transparent;
    color: #fff;
    border: 2px solid #fcfcfc;
    border-radius: 0.3rem;
    cursor: pointer;
    font-weight: bold;
    font-family: "Rubik", sans-serif;
    animation: ${fadeIn} 0.5s ease-in-out;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
      background: #fcfcfc;
      color: #000;
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;

const Star = styled.div`
  display: flex;
  align-items: center;
  * + * {
    margin-left: 0.3rem;
  }
  svg {
    height: 2.5rem;
    @media (max-width: 600px) {
      height: 1.7rem;
    }
  }
  span {
    font-size: 1.4rem;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const Genres = styled.div`
  display: flex;
  padding: 1rem 0 0 0;
  animation: ${fadeIn} 0.5s ease-in-out;
  .genre {
    margin-right: 1em;
    display: flex;
    align-items: center;

    span {
      font-size: 1.4rem;
      margin-left: 0.5rem;
      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }
`;

const Language = styled.div`
  display: flex;
  margin-top: 0.5em;
  align-items: center;
  padding: 0.2rem 0 3rem 0;
  svg {
    height: 1.7rem;
    @media (max-width: 600px) {
      height: 1.4rem;
    }
  }
  p {
    font-size: 1.2rem;
    margin-left: 0.3rem;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;
