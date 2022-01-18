import React, { useState } from "react";
import {
    Button,
    Container,
    Row,
    Col,
    InputGroup,
    InputGroupText,
    Input,
} from "reactstrap";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import DefaultFooter from "../components/Footers/DefaultFooter";
import MainCarousel from "../components/Carousels/MainCarousel";

function Contact() {
    const [firstFocus, setFirstFocus] = useState(false);
    const [lastFocus, setLastFocus] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <MainCarousel />
                <div className="section section-contact-us text-center">
                    <Container>
                        <h2 className="title">Want to work with us?</h2>
                        <p className="description">Your project is very important to us.</p>
                        <Row>
                            <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                                <InputGroup
                                    className={
                                        "input-lg" + (firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                        <InputGroupText>
                                            <i className="now-ui-icons users_circle-08"></i>
                                        </InputGroupText>
                                    <Input
                                        placeholder="First Name..."
                                        type="text"
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                        onChange={e => setName(e.target.value)}
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                        "input-lg" + (lastFocus ? " input-group-focus" : "")
                                    }
                                >
                                        <InputGroupText>
                                            <i className="now-ui-icons ui-1_email-85"></i>
                                        </InputGroupText>
                                    <Input
                                        placeholder="Email..."
                                        type="text"
                                        onFocus={() => setLastFocus(true)}
                                        onBlur={() => setLastFocus(false)}
                                        onChange={e => setEmail(e.target.value)}
                                    ></Input>
                                </InputGroup>
                                <div className="textarea-container">
                                    <Input
                                        cols="80"
                                        name="name"
                                        placeholder="Type a message..."
                                        rows="4"
                                        type="textarea"
                                        onChange={e => setMessage(e.target.value)}
                                    ></Input>
                                </div>
                                <div className="send-button">
                                    <Button
                                        block
                                        className="btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="lg"
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default Contact;
