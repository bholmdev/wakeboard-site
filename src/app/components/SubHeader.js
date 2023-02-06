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
                                <Link to="/">
                                    <Button color="primary">Home</Button>
                                </Link>
                            </BreadcrumbItem>
                            {detail && (
                                <BreadcrumbItem>
                                    <Link to="/directory">
                                        <Button color="primary">
                                            Directory
                                        </Button>
                                    </Link>
                                </BreadcrumbItem>
                            )}
                            <BreadcrumbItem>
                                <Button color="primary">
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

{/* <div className="breadcrumb-container">
    <Breadcrumb>
        <BreadcrumbItem>
            <Link to="/">
                <button className="breadcrumb-btns">Home</button>
            </Link>
        </BreadcrumbItem>
        {detail && (
            <BreadcrumbItem>
                <Link to="/directory">
                    <button className="breadcrumb-btns">
                        Directory
                    </button>
                </Link>
            </BreadcrumbItem>
        )}
        <BreadcrumbItem>
            <button className="breadcrumb-btns">
                {current}
            </button>
        </BreadcrumbItem>
    </Breadcrumb>
</div> */}