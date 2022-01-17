import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hello = styled.h1`
  font-family: 'Segoe UI', sans-serif;
  color: dodgerblue;
`;

function Home() {
  return (
    <Hello><Link to="/hello">Hello</Link>, world!</Hello>
  );
}

export default Home;
