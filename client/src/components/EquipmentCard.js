import styled from "styled-components";

const EquipmentCard = (props) => {
  const { equipment, setSelected } = props;

  return (
    <Card
      onClick={() => {
        setSelected(equipment);
      }}
      className="equipment-card"
    >
      <div className="img-container">
        <img src={equipment.imgUrl} alt="equipment" />
      </div>
      <h6 className="name">{equipment.name}</h6>
    </Card>
  );
};

export default EquipmentCard;

const Card = styled.div`
  width: 10rem;
  text-align: left;
  margin-top: 3rem;
  margin-left: 3rem;
  cursor: pointer;
  height: fit-content;
  .img-container {
    background: #7b7b7b;
    overflow: hidden;
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    img {
      width: 100%;
    }
  }
`;
