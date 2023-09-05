import Link from "next/link";
import styled from "styled-components";
import GlobalStyle from "../styles";

const Nav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #d0bfff;

  &:hover {
    color: #beadfa;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
      </Nav>
      <Component {...pageProps} />
    </>
  );
}
