import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedPark } from "../parks/parksSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedSponsor } from "../sponsors/sponsorSlice";

const DisplayList = () => {
    const items = [selectFeaturedPark(), selectFeaturedPromotion(), selectFeaturedSponsor()]

    return (
        <Row>
            <h4>Featured Park, Goodies, and Sponsor!</h4>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col
                            md
                            className="m-1"
                            key={idx}
                        >
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;