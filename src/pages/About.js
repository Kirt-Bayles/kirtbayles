import { Container, Row, Col, Card } from "react-bootstrap";
function About() {
    return(
        <div>
            <Container>
                <p className="p-neutral poppins-bold mt-5">
                    About
                </p>
                <Row clasName='gap-0'>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 w-content d-flex align-items-center border-0  border-right-bold  m-auto bg-secondary-subtle lh-lg">
                            <p className="fs-1 fw-bold m-auto text-content">Background</p>
                        </Card>
                    </Col>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 w-content shadow p-3">
                            <p className="fs-3 text-justify m-auto text-content">I hold a degree in Information Technology and have gained valuable experience through various projects and internships. My skills include HTML, CSS, JavaScript, and React, among other technologies.</p>
                        </Card>
                    </Col>
                </Row>

                {/* <line  */}
                <Row clasName='gap-0'>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 n-content  border-right-bold border-0">
                        </Card>
                    </Col>
                </Row>
                {/* <line  */}

                <Row clasName='gap-0'>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 w-content border-right-bold shadow p-3 lh-lg">
                            <p className="fs-3 text-justify m-auto text-content">Beyond coding, I'm passionate about sports, particularly volleyball and basketball. These activities have taught me teamwork, strategic thinking, and perseverance.</p>
                        </Card>
                    </Col>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 w-content d-flex align-items-center border-0 m-auto bg-secondary-subtle lh-lg">
                            <p className="fs-1 fw-bold m-auto text-content">Interests</p>
                        </Card>
                    </Col>
                </Row>
                
                {/* <line  */}
                <Row clasName='gap-0'>
                    <Col className='m-0 p-0 w-100 d-hidden'>
                        <Card className="m-0 w-100 n-content border-right-bold border-0  d-hidden">
                        </Card>
                    </Col>
                </Row>
                {/* <line  */}

                <Row clasName='gap-0'>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 w-content border-right-bold border-0 bg-secondary-subtle lh-lg">
                        <p className="fs-1 fw-bold m-auto text-content">Experience</p>
                        </Card>
                    </Col>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 w-content shadow p-3 lh-lg">
                            <p className="fs-3 text-justify m-auto text-content">During my studies, I worked on numerous projects that allowed me to apply my knowledge practically. Additionally, my internship experiences have equipped me with skills in project management and teamwork.</p>
                        </Card>
                    </Col>
                </Row>
                
                {/* <line  */}
                <Row clasName='gap-0'>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 n-content border-right-bold border-0">
                        </Card>
                    </Col>
                </Row>
                {/* <line  */}

                <Row clasName='gap-0'>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 w-content border-right-bold shadow p-3 lh-lg">
                        <p className="fs-3 text-justify m-auto text-content">I'm excited about the future and am looking forward to opportunities where I can contribute, learn, and grow. I'm particularly interested in roles that allow me to leverage my skills in front-end development and collaborate with talented teams.</p>
                        </Card>
                    </Col>
                    <Col className='m-0 p-0 w-100'>
                        <Card className="m-0 w-100 w-content border-0  bg-secondary-subtle lh-lg">
                        <p className="fs-1 fw-bold m-auto text-content">Goals</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default About;