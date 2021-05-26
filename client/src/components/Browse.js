import styled from "styled-components";
import EquipmentCard from "./EquipmentCard";
import Aside from "./Aside";
import Page from "./Page";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Browse = (props) => {
  const { role } = props;
  const [equipment, setEquipment] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    axios
      .get("https://use-my-tech2.herokuapp.com/api/equipment")
      .then((res) => {
        setEquipment(res.data);
      });
  }, []);

  return (
    <Page>
      <BrowseDiv>
        {equipment ? (
          <div className="equipment-container">
            {equipment.map((item) => {
              return (
                <EquipmentCard
                  key={item.id}
                  equipment={item}
                  setSelected={setSelected}
                />
              );
            })}
          </div>
        ) : (
          <div>Loading</div>
        )}
        {selected && (
          <Aside className="info">
            <EquipmentCard equipment={selected} />
            <div className="desc">{selected.description}</div>
            {role === "renter" ? (
              <Button variant="success" size="lg" className="request-btn">
                Request To Rent
              </Button>
            ) : (
              <Button
                disabled
                variant="secondary"
                size="lg"
                className="request-btn"
              >
                Login To Rent
              </Button>
            )}
          </Aside>
        )}
      </BrowseDiv>
    </Page>
  );
};

export default Browse;

const BrowseDiv = styled.div`
  height: 94vh;
  .equipment-container {
    width: 60vw;
    display: flex;
    flex-wrap: wrap;
  }
  .info {
    background: #2e2e2e;
    .equipment-card {
      margin: 0;
    }
    .name {
      font-size: 2rem;
      margin-top: 1rem;
    }
    .desc {
      margin-top: 1rem;
      font-size: 1.2rem;
      width: 10rem;
    }
    .request-btn {
      margin-top: 2rem;
    }
  }
`;
