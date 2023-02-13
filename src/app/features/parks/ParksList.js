import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import ParkCard from "./ParkCard";
import { selectAllParks } from "./parksSlice";

const ParksList = () => {
    const parks = useSelector(selectAllParks);

    return (
        <Row className="ms-auto">
            {
                parks.map(park => {
                    return ( 
                        <Col
                            md="6"
                            className="mb-4"
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