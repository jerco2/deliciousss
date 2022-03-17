import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
        <Light />
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
        <Light />
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
        <Light />
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
        <Light />
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const Light = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.25;
  left: 0;
  top: 0;
  clip-path: circle(60% at 30% 0);
`;

const SLink = styled(NavLink)`
  min-width: 150px;
  min-height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  background: #ffa500;
  width: 9vw;
  height: 3vw;
  cusor: pointer;
  transform: scale(0.8);
  color: white;
  padding: 20px;

  h4 {
    color: white;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 1.5vh;
    }
  }

  svg {
    color: white;
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 3vh;
    }
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }

  @media (max-width: 768px) {
    width: 18vw;
    height: 18vw;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
  }
`;

export default Category;
