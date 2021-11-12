import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const Button = styled(LinkR)`
  background-color: green;
  padding: 12px 40px;
  border-radius: 40px;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #e0e0e0;
    color: #000;
    transition: 0.3s ease-in-out;
  }
`