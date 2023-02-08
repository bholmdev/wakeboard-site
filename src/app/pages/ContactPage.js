import { Col, Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current="Contact Us" />
            <Row className="row-content align-items-center">
                <Col sm="4">
                    <h5>Our Address</h5>
                    <address>
                        1 Wakeboard Way
                        <br />
                        Austin, TX 73301
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+15555555555'
                    >
                        <i
                            className='fa fa-phone'
                            style={{ paddingRight: "1rem" }}
                        />1-555-555-5555
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:notreal@notreal.co'
                    >
                        <i
                            className='fa fa-envelope-o'
                            style={{ paddingRight: "1rem" }}
                        />wakeboard@notrealdomain.com
                    </a>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs="12">
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>
                <Col md="10">
                    TBD: ContactForm
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;