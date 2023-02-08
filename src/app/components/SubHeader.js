import { Breadcrumb, BreadcrumbItem, Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
    return (
        <Row>
            <Col>
                {current !== 'Home' && (
                    <div className="breadcrumb-container">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/wakeboard-site">
                                    <Button className="cust-bread-btn">Home</Button>
                                </Link>
                            </BreadcrumbItem>
                            {detail && (
                                <BreadcrumbItem>
                                    <Link to="/directory">
                                        <Button className="cust-bread-btn">
                                            Directory
                                        </Button>
                                    </Link>
                                </BreadcrumbItem>
                            )}
                            <BreadcrumbItem>
                                <Button className="cust-bread-btn">
                                    {current}
                                </Button>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                )}
                <h2>{current}</h2>
                <hr />
            </Col>
        </Row>
    );
};

export default SubHeader;