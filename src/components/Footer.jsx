import styled from "styled-components";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <FooterStyled>
      <MainContainer>
        <Container>
          <h4>Follow us</h4>
          <br />
          <ul>
            <li>
              <AiFillFacebook />{" "}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <AiOutlineTwitter />{" "}
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <FiInstagram />{" "}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </Container>
        <Container>
          <h4>Company</h4>
          <br />
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </Container>
        <Container>
          <h4>Hotlines</h4>
          <br />
          <ul>
            <li>
              <BsFillTelephoneFill /> <span>982-xx-xx</span>
            </li>
            <li>
              <BsFillTelephoneFill /> <span>982-xx-xx</span>
            </li>
          </ul>
        </Container>
        <Container>
          <h4>Legal</h4>
          <br />
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </Container>
      </MainContainer>
      <GhostContainer>
        <div>
          <h2>deliciousss</h2>
          <p>
            This project is a re-designed product of reactjs crash course 2022
            from Dev Ed yt channel.
          </p>
        </div>
        <br />
        <span>© 2022 - ReactJS crash course</span>
      </GhostContainer>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  background: #d6d6d6;
  width: 100%;
  padding: 2rem;
  display: flex;
  margin-top: 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
  }

  span,
  a {
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }
`;

const GhostContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    font-size: 14px;
  }

  span {
    font-size: 14px;
  }
`;

const Container = styled.div`
  margin-right: 20px;
  color: #515151;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export default Footer;
