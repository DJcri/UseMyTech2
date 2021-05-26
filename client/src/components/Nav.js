import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Nav = (props) => {
  const { token, setToken, setRole } = props;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken("");
    setRole("");
  };

  useEffect(() => {}, [token]);

  return (
    <NavBar>
      <NavLink to="/" className="logo">
        UseMyTech
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/browse">browse</NavLink>
        </li>
        {token && (
          <li>
            <NavLink to="/myequipment">my equipment</NavLink>
          </li>
        )}
        {!token && (
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        )}
        {token && (
          <li>
            <NavLink onClick={logout} to="/">
              logout
            </NavLink>
          </li>
        )}
      </ul>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  position: absolute;
  background: white;
  height: 6vh;
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.1);
  z-index: 2;
  .logo {
    margin-left: 2rem;
    margin-right: 1rem;
    font-weight: bold;
    color: black;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    li {
      margin-right: 2rem;
      a {
        color: #7b7b7b;
      }
    }
  }
`;
