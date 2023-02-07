import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const DisplayCard = ({ item }) => {
    const { image, name, description, link } = item;

    return (
        <Card>
            <CardImg
                src={image}
                alt={name}
            />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
                {
                    link && (
                        <CardText>Website: <a href={link} target="_blank" rel="noopener noreferrer">{name}</a></CardText>
                    )
                }
                
            </CardBody>
        </Card>
    );
};

export default DisplayCard;