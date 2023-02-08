import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description, link } = item;
    const [ toggle, setToggle ] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? "scale(1,1)" : "scale(1,0)",
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={animatedStyle}>
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
        </animated.div>
    );
};

export default AnimatedDisplayCard;