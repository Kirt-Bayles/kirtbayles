import { Container, Row, Col, Card, Image } from "react-bootstrap";
import web from '../images/web.png';

function Project() {
    return(
        <div>
            <Container>
                <p className="p-neutral poppins-bold mt-5">
                    Project
                </p>
                <Row xs={1}>
                    <Col>
                        <Card className="p-3 border-0 m-auto">
                            <Row>
                                <Col className="m-auto">
                                    <p className="text-content text-justify">This project showcases my ability to create a responsive and aesthetically pleasing portfolio website. It serves as an online resume to present my skills, experience, and projects effectively to potential employers and clients.</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row xs={1}>
                    <Col>
                        <Card className="p-3 border-0 shadow  w-75 m-auto">
                            <Row>
                                <Col className="overflow-hidden m-auto">
                                    <Image src={web} fluid className="zoom"/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                
                <Row xs={1} className="mt-4">
                    <Col>
                        <Card className="p-3 border-0 m-auto">
                            <Card.Title>
                                <p className="text-content fw-bold">Features:</p>
                            </Card.Title>
                            <Row>
                                <Col className="m-auto">
                                    <ul>
                                        <li>
                                            <p className="text-content text-justify">
                                                <b>Responsive Design:</b> Ensures compatibility with various devices and screen sizes, providing an optimal viewing experience whether on a mobile phone, tablet, or desktop.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-content text-justify">
                                                <b>Modern UI/UX:</b> Clean and modern design with intuitive navigation, making it easy for visitors to explore my portfolio.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-content text-justify">
                                                <b>Interactive Elements:</b> Includes animations, hover effects, and interactive components to enhance user engagement.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-content text-justify">
                                                <b>Technologies Used:</b> HTML, CSS, JavaScript, and Bootstrap, demonstrating my proficiency in front-end development.
                                            </p>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row xs={1} className="mt-4">
                    <Col>
                        <Card className="p-3 border-0 m-auto">
                            <Card.Title>
                                <p className="text-content fw-bold">Project Highlights:</p>
                            </Card.Title>
                            <Row>
                                <Col className="m-auto">
                                    <ul>
                                        <li>
                                            <p className="text-content text-justify">
                                            Developed a fully responsive layout using media queries and flexible grid systems.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-content text-justify">
                                            Implemented smooth scrolling and interactive elements using JavaScript and CSS animations.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-content text-justify">
                                            Created a visually appealing design with a focus on user experience, ensuring easy navigation and accessibility.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-content text-justify">
                                            Integrated social media links and contact forms to facilitate easy communication.
                                            </p>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row xs={1} className="mt-4">
                    <Col>
                        <Card className="p-3 border-0 m-auto">
                            <Row>
                                <Col className="m-auto">
                                    <p className="text-center text-content poppins-extralight-italic">
                                    This project exemplifies my skills in front-end development and my ability to create functional, user-friendly, and visually appealing websites. It is a testament to my dedication to producing high-quality work and my commitment to continuous learning and improvement in the field of web development.
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Project;