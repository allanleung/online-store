import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-radius: 0.5rem;
  border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem, 0;
  transition: all 0.5s ease-in-out;
  text-transform: capitalize;
  &:hover {
  background: var(--lightBlue);
  background: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--mainBlue);
  }
  &: focus {
  outline: none;
  }
`;