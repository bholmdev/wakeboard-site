import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const ParkCard = (props) => {
  return (
    <Card>
        <CardImg
            width="100%"
            src={props.park.image}
            alt={props.park.name}
        />
        <CardImgOverlay>
            <CardTitle>{props.park.name}</CardTitle>
        </CardImgOverlay>
    </Card>
  );
};

export default ParkCard;