import styled from "styled-components";
import Page from "./Page";
import equipment from "../images/equipment.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Page>
      <HomeDiv>
        <div className="bg-container">
          <img src={equipment} alt="equipment" />
        </div>
        <div className="cta">
          <p>Stop paying full price.</p>
          <NavLink to="/browse" className="cta-btn">
            Rent Now
          </NavLink>
        </div>
      </HomeDiv>
    </Page>
  );
};

export default Home;

const HomeDiv = styled.div`
  display: flex;
  .bg-container {
    width: 60%;
    overflow: hidden;
    height: 94vh;
    img {
      width: 100%;
    }
  }
  .cta {
    padding-top: 10vh;
    width: 40%;
    background: #171717;
    color: white;
    p {
      font-size: 6rem;
      font-weight: bold;
      text-align: left;
      width: 80%;
      margin: 0 auto;
    }
    .cta-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      height: 120px;
      background: #237bff;
      border-radius: 60px;
      font-size: 3rem;
      margin: 0 auto;
      margin-top: 10rem;
      color: white;
      text-decoration: none;
      transition: 0.3s;
      :hover {
        background: white;
        color: black;
      }
    }
  }
`;
