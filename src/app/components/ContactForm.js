import { Button, Col, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from "formik";

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                phoneNum: "",
                email: "",
                agree: false,
                contactType: "By Phone",
                feedback: ""
            }}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor="firstName" md="2">
                        First Name
                    </Label>
                    <Col md="10">

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="lastName" ms="2">
                        Last Name
                    </Label>
                    <Col md="10">

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="phoneNum" md="2">
                        Phone
                    </Label>
                    <Col md="10">

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="email" md="2">
                        Email
                    </Label>
                    <Col md="10">

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label check md={{ size: 4, offset: 2 }}>
                        May we contact you?
                    </Label>
                    <Col md="4">

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="feedback" md="2">
                        Your Feedback
                    </Label>
                    <Col md="10">

                    </Col>
                </FormGroup>
                <FormGroup row>

                </FormGroup>
            </Form>
        </Formik>
    );
};

export default ContactForm;