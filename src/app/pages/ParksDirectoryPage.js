import { Container } from "reactstrap";
import ParksList from "../features/parks/ParksList";
import SubHeader from "../components/SubHeader";

const ParksDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current="Directory" />
            <h2>Click on park for more information</h2>
            <ParksList />
        </Container>
    );
};

export default ParksDirectoryPage;