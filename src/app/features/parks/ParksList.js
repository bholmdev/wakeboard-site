import { PARKS } from "../../shared/PARKS";
import { Col, Row } from "reactstrap";
import ParkCard from "./ParkCard";

const ParksList = () => {
    return (
        <Row className="ms-auto">
            {
                PARKS.map(park => {
                    return ( 
                        <Col
                            md="5"
                            className="m-4"
                            key={park.id}
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