import { Card, CardBody, CardImg, CardText, Col } from "reactstrap";

const ParkDetail = ({ park }) => {
    const { image, name, description } = park;

    return (
        <Col
            md="5"
            className="m-1"
        >
            <Card>
                <CardImg
                    top
                    src={image}
                    alt={name}
                />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ParkDetail;