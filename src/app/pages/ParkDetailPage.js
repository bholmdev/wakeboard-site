import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { selectParkById } from "../features/parks/parksSlice";
import ParkDetail from "../features/parks/ParkDetail";

const ParkDetailPage = () => {
    const { parkId } = useParams();
    const park = selectParkById(parkId)

    return (
        <Container>
            <Row>
                <ParkDetail park={park} />
            </Row>
        </Container>
    );
};

export default ParkDetailPage;