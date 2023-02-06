import { Container } from "reactstrap";
import ParksList from "../features/parks/ParksList";
import SubHeader from "../components/SubHeader";

const ParksDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current="Directory" />
            <ParksList />
        </Container>
    );
};

export default ParksDirectoryPage;