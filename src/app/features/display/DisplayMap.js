import { Card, CardBody, CardTitle } from "reactstrap"

const DisplayMap = () => {
    return (
        <Card className="mt-4">
            <CardBody>
                <CardTitle className="ms-2">
                    <h2 className="map-title">Parks Around the World</h2>
                    
                        <p>Special shoutout to
                            <a
                                href="http://uscablewakeparks.com/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >US Cable Wake Parks
                            </a> for creating this map!
                        </p>
                    
                </CardTitle>
            </CardBody>
            <iframe title="world-map" className="world-map" src="https://www.google.com/maps/d/embed?mid=1_2-3msEu83LIxfEm9TSn_V9c0zo&ehbc=2E312F" width="640" height="480"></iframe>
        </Card>
    );
};

export default DisplayMap;