import { Col, Row } from "reactstrap";
import ParkCard from "./ParkCard";
import { selectAllParks } from "./parksSlice";

const ParksList = ({ setParkId }) => {
    const parks = selectAllParks();

    return (
        <Row className="ms-auto">
            {
                parks.map(park => {
                    return ( 
                        <Col
                            md="5"
                            className="m-4"
                            key={park.id}
                            onClick={() => setParkId(park.id)}
                        >
                            <ParkCard park={park}/>
                        </Col>   
                    )
                })
            }
        </Row>
    );
};

export default ParksList;