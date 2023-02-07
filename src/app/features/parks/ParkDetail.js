import { Card, CardBody, CardImg, CardText, Col } from "reactstrap";

const ParkDetail = ({ park }) => {
    const { image, name, description, country, city, state, link } = park;

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
                <CardBody>
                    <h5>Location</h5>
                    <CardText>City: {city}</CardText>
                    <CardText>State: {state}</CardText>
                    <CardText>Country: {country}</CardText>
                    <CardText>Website: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ParkDetail;