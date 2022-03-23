import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main>
          <Nav>
            <LogoDiv>
              <GiKnifeFork />
              <Logo to={"/"}>deliciousss</Logo>
            </LogoDiv>
            <Search />
          </Nav>
          <Container>
            <Category />
            <Pages />
          </Container>
          <Footer />
        </Main>
      </BrowserRouter>
    </div>
  );
}

const Container = styled.div`
  padding: 0% 20%;
  overflow-y: scroll;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 5%;
    height: auto;
    overflow-y: visible;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const LogoDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 2rem;
  color: white;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  margin-left: 5px;
  font-weight: 400;
  color: white;
`;
const Nav = styled.div`
  padding: 0rem 1rem;
  background: orange;
  width: 100%;
  z-index: 30;
  position: fixed;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;
export default App;
