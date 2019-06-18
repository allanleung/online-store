import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  background: transparent;
  border: 0.05rem solid var(--adobeLighterGreen);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--adobeLighterGreen)"};
  color: var(--lightBlue);
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--adobeLighterGreen)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    background: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--adobeMainWhite)"};
    color: var(--adobeLighterGreen);
  }
  &:focus {
    outline: none;
  }
`;
