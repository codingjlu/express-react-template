import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Bye = styled.h1`
  font-family: 'Segoe UI', sans-serif;
  color: hotpink;
`;

function Hello() {
  return (
    <Bye><Link to="/">Bye</Link>, world!</Bye>
  );
}

export default Hello;
