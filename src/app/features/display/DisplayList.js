import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedPark } from "../parks/parksSlice";
import { selectFeaturedPromotion } from "./promotions/promotionsSlice";
import { selectFeaturedSponsor } from "../sponsors/sponsorSlice";

const DisplayList = () => {
    const items = [selectFeaturedPark(), selectFeaturedPromotion(), selectFeaturedSponsor()]

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col
                        md
                        className="m-1"
                        key={idx}
                    >
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;