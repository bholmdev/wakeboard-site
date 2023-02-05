import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ParkDetail from "../features/parks/ParkDetail";
import ParksList from "../features/parks/ParksList";
import { selectParkById } from "../features/parks/parksSlice";

const ParksDirectoryPage = () => {
    const [parkId, setParkId] = useState(0);
    const selectedPark = selectParkById(parkId);

    return (
        <Container>
            <Row>
                <Col
                    sm="5"
                    md="7"
                >
                    <ParksList setParkId={setParkId} />
                </Col>
                <Col
                    sm="7"
                    md="5"
                >
                    <ParkDetail park={selectedPark} />
                </Col>
            </Row>
        </Container>
    );
};

export default ParksDirectoryPage;