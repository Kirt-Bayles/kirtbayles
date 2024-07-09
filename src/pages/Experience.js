import { Container, Row, Col, Card, Image } from "react-bootstrap";
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
function Experience() {
    return(
        <div>
            <Container>
                <p className="p-neutral poppins-bold mt-5">
                    Field Experiences
                </p>
                <Row xs={1} className="gap-5">
                    <Col>
                        <Card className="p-3 border-0 shadow">
                            <Row>
                                <Col className="overflow-hidden m-auto">
                                    <Image src={project1} fluid className="zoom"/>
                                </Col>
                                <Col className="m-auto">
                                    <p className="text-content text-justify">During my OJT days in Post office kabankalan city, we arrange some mails also shorting by brgy all over kabankalan area. Then, national id’s first scanning the serial numbers of ids next record all ids then arrange it properly by brgy so it will easy to find</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 border-0 shadow">
                            <Row>
                                <Col className="m-auto">
                                    <p className="text-content text-justify">This day in Brgy Oringao Kabankalan City, we distribute their national Ids one by one, at first it’s difficult to handle them because they don’t listent to us but we find ways to distribute all ids to them</p>
                                </Col>
                                <Col className="overflow-hidden m-auto">
                                    <Image src={project2} fluid className="zoom"/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 border-0 shadow">
                            <Row>
                                <Col className="overflow-hidden m-auto">
                                    <Image src={project3} fluid className="zoom"/>
                                </Col>
                                <Col className="m-auto">
                                    <p className="text-content text-justify">At Brgy Linao Kabankalan City we also distribute ids, this time the people are very welcoming also they participate and listen to us that’s why it’s easy to distribute their ids one by one</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Experience;