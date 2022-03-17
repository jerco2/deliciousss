import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter something to search");
    } else {
      navigate("/searched/" + input);
    }
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem;
  position: relative;
  width: 30%;

  div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  input {
    border: none;
    background: white;
    font-size: 1rem;
    padding: 0.5rem 0rem;
    padding-left: 3rem;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;
    outline: none;
    width: 100%;

    ::placeholder {
      color: #cccccc;
    }
  }

  svg {
    background: white;
    left: 1rem;
    font-size: 1rem;
    position: absolute;
    color: #ffa500;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export default Search;
