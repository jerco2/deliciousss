import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from "react";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <ButtonContainer>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
        </ButtonContainer>
        {activeTab === "instructions" && (
          <div>
            <InstructionContainer>
              <InstructionInfo
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></InstructionInfo>
            </InstructionContainer>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: #ffa00e;
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
    padding: 0px 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;

    img {
      width: 100%;
    }
  }
`;
const InstructionInfo = styled.p`
  font-size: 16px;
  font-weight: 400px;
`;
const InstructionContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0px;
`;

const Button = styled.button`
  padding: 10px 30px;
  color: #ffa00e;
  background: white;
  border: 2px solid #ffa00e;
  font-weight: 600;
  border-radius: 5px;
`;

const Info = styled.div`
  margin-left: 10rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export default Recipe;
