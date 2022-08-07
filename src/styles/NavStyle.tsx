import { Link } from "react-router-dom";
import styled from "styled-components";
type NavbarProps = {
  extend: boolean;
};
export const NavbarContainer = styled("nav")<NavbarProps>`
  width: 100%;
  height: ${(props) => (props.extend ? "100vh" : "60px")};
  background-color: purple;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 60px;
  }
`;

export const NavbarLinkContainer = styled("div")`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;
export const ButtonLink = styled("button")`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const ExtendedNavbar = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
