import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
import DisplayMap from "../features/display/DisplayMap";

const HomePage = () => {
  return (
    <Container>
      <SubHeader current="Home" />
      <DisplayList />
      <DisplayMap />
    </Container>
  );
};

export default HomePage;