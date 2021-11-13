import React from "react";
import styled, { keyframes } from "styled-components";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <Wrapper showModal={showModal}>
      <Container>
        <CloseBtn>
          <svg
            onClick={() => setShowModal(false)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </CloseBtn>
        <h1>Book Your Ticket</h1>

        <form>
          <input type="email" placeholder="Email *" required />
          <input
            type="password"
            minlength="6"
            placeholder="Password *"
            required
          />
          <button>Book Now!</button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  display: ${(props) => (props.showModal ? "grid" : "none")};
  place-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
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
const Container = styled.div`
  height: fit-content;
  width: min(90%, 55rem);
  background: rgba(0, 0, 0, 0.9);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  animation: ${fadeIn} 0.5s ease-in-out;
  h1 {
    padding: 2rem 1rem;
    font-size: 3rem;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    background: linear-gradient(
      270.97deg,
      #ffe580 -21.36%,
      #ff7571 -2.45%,
      #ea5dad 26.84%,
      #c2a0fd 64.15%,
      #3bf0e4 108.29%,
      #b2f4b6 159.03%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5em;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: #fff;
      bottom: 1.3rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      margin: 1em auto;
      background: rgba(0, 0, 0, 0.5);
      outline: none;
      color: #fff;
      width: min(90%, 45rem);
      font-size: 1.4rem;
      border-radius: 0.3rem;
      padding: 1.5rem;
      border: 2px solid #fcfcfc;
      @media (max-width: 600px) {
        font-size: 1rem;
        padding: 1rem;
      }
      &:invalid:required {
        border: 2px solid red;
        color: red;
      }
      &:invalid {
        border: 2px solid red;
        color: red;
      }
    }

    button {
      margin-top: 2rem;
      padding: 1.5rem;
      width: 30%;
      margin-bottom: 2em;
      border: none;
      margin-inline: auto;
      outline: 3px solid #fcfcfc;
      color: #fcfcfc;
      background: transparent;
      border-radius: 0.3rem;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      font-family: "Rubik", sans-serif;
      transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      @media (max-width: 600px) {
        font-size: 0.8rem;
        padding: 0.7rem;
      }
      &:hover {
        background: linear-gradient(
          570.97deg,
          #ffe580 -21.36%,
          #ff7571 -2.45%,
          #ea5dad 26.84%,
          #c2a0fd 64.15%,
          #3bf0e4 108.29%,
          #b2f4b6 159.03%
        );
        color: #000;
        outline: none;
      }
    }
  }
`;

const CloseBtn = styled.div`
  float: right;
  padding: 1rem;
  svg {
    color: #fff;
    height: 2.4rem;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    padding: 0.8rem;
    svg {
      height: 1.5rem;
    }
  }
`;
