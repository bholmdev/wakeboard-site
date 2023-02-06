import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { selectParkById } from "../features/parks/parksSlice";
import ParkDetail from "../features/parks/ParkDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const ParkDetailPage = () => {
    const { parkId } = useParams();
    const park = selectParkById(parkId)

    return (
        <Container>
            <SubHeader current={park.name} detail={true} />
            <Row>
                <ParkDetail park={park} />
                <CommentsList parkId={parkId} />
            </Row>
        </Container>
    );
};

export default ParkDetailPage;