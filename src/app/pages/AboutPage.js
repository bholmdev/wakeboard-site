import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Row
} from "reactstrap";
import SubHeader from "../components/SubHeader";
import { numberOfComments } from "../features/comments/commentsSlice";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="About Us" />
            <Row className="row-content">
                <Col sm="6">
                    <h3>Mission Statement</h3>
                    <p>
                        It is our mission to provide our members the best experience when trying to find a wakepark near their location.  We thrive to keep our list updated however, with an ever changing world that is not always possible.  If you find any parks that no longer exist on our list or find new parks that are not listed please sent us a message on our <a href="/contact">Contact Us</a> page and we will update accordingly.
                    </p>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardHeader className="bg-primary text-white">
                            <h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>February 5, 2023</dd>
                                <dt className='col-6'>No. of Parks Found in {new Date().getFullYear()}</dt>
                                <dd className='col-6'>583</dd>
                                <dt className='col-6'>No. of Reviews in {new Date().getFullYear()}</dt>
                                <dd className='col-6'>{numberOfComments}</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p>
                                    “Nerves are running, and I'm thinking about what I'm going to do out there. You see me 30 minutes later, though, and it's totally different. Let's go to the beer tent, tell stories from the day and have fun.”
                                </p>
                                <footer className="blockquote-footer">
                                    Rusty Malinkoski,{' '}
                                    <cite title="Source Title">
                                        <a
                                            href="https://www.wakeboardingmag.com/blog/features/2011/12/08/best-of-2011-top-10-pro-spotlight-quotes/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Wakeboarding Magazine
                                        </a> - 2011
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs="12">
                    <h3>Sponsors</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;