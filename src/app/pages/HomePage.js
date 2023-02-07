import { Card, CardTitle, CardBody, Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";

const HomePage = () => {
  return (
    <Container>
      <SubHeader current="Home" />
      <DisplayList />
      <Card body className="ms-2">
        <CardTitle className="ms-2">
          <h2 className="map-title">Parks Around the World</h2>
          <a
            href="http://uscablewakeparks.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >Special shoutout to US Cable Wake Parks for creating this map!</a>
        </CardTitle>
        <Card body>
          <iframe className="world-map" src="https://www.google.com/maps/d/embed?mid=1_2-3msEu83LIxfEm9TSn_V9c0zo&ehbc=2E312F" width="640" height="480"></iframe>
        </Card>
      </Card>
    </Container>
  );
};

export default HomePage;