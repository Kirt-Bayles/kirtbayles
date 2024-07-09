import { Container, Row, Col, Card } from "react-bootstrap";
function Contact() {
    return(
        <div>
            <Container>
            <p className="p-neutral poppins-bold mt-5">
                Let's Connect
            </p>
            <Row>
                <Col>
                    <p className="text-content text-justify">
                    Hello! I'm a fresh graduate with a degree in Information Technology. I'm excited to start my journey in the tech industry, and I'm open to new opportunities, collaborations, or just a friendly chat.
                    </p>
                </Col>
            </Row>
            <Row xs={1} className="mt-4">
                    <Col>
                        <Card className="p-3 border-0 m-auto ">
                            <Card.Title>
                                <p className="text-content fw-bold">Get in Touch:</p>
                            </Card.Title>
                            <Row>
                                <Col className="m-auto">
                                    <ul>
                                        <li>
                                            <p className="text-content text-justify">
                                                <b>Email : </b> <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMTtQLDlSPGJSkhQNznJJbKpHSVXZnLJGnHTTDHhHcKRQNKnmmQdsBmZwTqmCwDFQcttRQb" rel="noreferrer"> kirtbayles@gmail.com</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-content text-justify">
                                                <b>Github : </b> <a href="https://github.com/kirtbayles01" rel="noreferrer"> kirtbayles01</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-content text-justify">
                                                <b>Facebook : </b> <a href="https://web.facebook.com/kirt.bsyles" rel="noreferrer"> Kirt Bayles (TOKS)</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-content text-justify">
                                                <b>Instagram : </b> <a href="https://www.instagram.com/kirt.bayles/" rel="noreferrer"> kirt.bayles</a>
                                            </p>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <p className="text-content text-justify">Whether you're looking to collaborate on a project, have a job opportunity, or just want to connect, I'd love to hear from you!</p>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;