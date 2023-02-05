import { Button, Col, Container, Row } from "reactstrap";
import ParkDetail from "../features/parks/ParkDetail";
import ParksList from "../features/parks/ParksList";
import { selectRandomPark } from "../features/parks/parksSlice";

const ParksDirectoryPage = () => {
    let selectedPark = selectRandomPark();

    const togglePark = () => {
        selectedPark = selectRandomPark();
        console.log(selectedPark);
    };

    return (
        <Container>
            <Button onClick={() => togglePark()}>
                Select Random Campsite
            </Button>
            <Row>
                <Col
                    sm="5"
                    md="7"
                >
                    <ParksList />
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