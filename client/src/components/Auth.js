import Page from "./Page";
import Login from "./Login";
import Signup from "./Signup";
import styled from "styled-components";

const Auth = (props) => {
  const { setToken, setRole } = props;

  return (
    <Page>
      <AuthDiv>
        <Login setToken={setToken} setRole={setRole} />
        <Signup />
      </AuthDiv>
    </Page>
  );
};

export default Auth;

const AuthDiv = styled.div`
  display: flex;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  .login,
  .signup {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding-top: 10rem;
    text-align: left;
    height: 94vh;
    min-height: 50rem;
    h1 {
      font-weight: bold;
      margin-bottom: 3rem;
    }
    input {
      width: 20rem;
    }
    button {
      margin-top: 2rem;
    }
  }
  .login {
    color: #8c8c8c;
  }
  .signup {
    background: #2e2e2e;
    color: white;
  }
`;
