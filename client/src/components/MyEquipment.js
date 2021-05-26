import styled from "styled-components";
import Page from "./Page";

const MyEquipment = (props) => {
  return (
    <Page>
      <BrowseDiv>
        <h2>You don't own any equipment</h2>
      </BrowseDiv>
    </Page>
  );
};

export default MyEquipment;

const BrowseDiv = styled.div`
  height: 94vh;
  h2 {
    margin-top: 4rem;
    margin-left: 4rem;
    color: #7b7b7b;
  }
`;
