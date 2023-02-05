import { Card, CardBody, CardImg, CardText, Col } from "reactstrap";

const CampsiteDetail = ({ park }) => {
    const { image, name, description } = park;

    return (
        <Col
            md="12"
            className="m-4"
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

export default CampsiteDetail;