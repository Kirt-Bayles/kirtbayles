import { Container, Row, Col, Image, Card } from "react-bootstrap";
import profile from '../images/profile.png';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';

function Home() {
    return (
        <div className="container mt-lg-5" id="Home">
            <Container>
                <Row className="row-cols-lg-2 row-cols-1 rounded-5">
                    <Col className="order-2 order-lg-1 mt-auto p-3">
                        <p className="p-neutral poppins-semibold text-center text-lg-start lh-25 fadeInUp">Hello,<br/> I’m Kirt Bayles<br/> An aspiring Web Developer</p>
                    </Col>
                    <Col className="order-1 order-lg-2 d-flex justify-content-center p-3">
                        <Image src={profile} className="profile" fluid />
                    </Col>
                </Row>
                <p className="p-neutral poppins-bold pt-lg-5 mt-5">
                    Recent Activities
                </p>
                <Row>
                    <Col md={6} >
                        <Card className='border-0 shadow py-3 px-1 w-100 overflow-hidden contain'>
                                <Image src={ project1} fluid className="zoom" />
                                <p className="description">During my OJT days in Post office kabankalan city, we arrange some mails also shorting by brgy all over kabankalan area. Then, national id’s first scanning the serial numbers of ids next record all ids then arrange it properly by brgy so it will easy to find</p>
                        </Card>
                    </Col>
                    <Col md={6} >
                        <Card className='border-0 shadow py-3 px-1 w-100 overflow-hidden contain'>
                                <Image src={ project2} fluid className="zoom" />
                                <p className="description">This day in Brgy Oringao Kabankalan City, we distribute their national Ids one by one, at first it’s difficult to handle them because they don’t listent to us but we find ways to distribute all ids to them</p>
                        </Card>
                    </Col>
                    <Col lg={8} className="pt-lg-5 m-auto">
                        <Card className='border-0 shadow py-3 px-1 w-100 overflow-hidden contain'>
                                <Image src={ project3} fluid className="zoom w-100" />
                                <p className="description">At Brgy Linao Kabankalan City we also distribute ids, this time the people are very welcoming also they participate and listen to us that’s why it’s easy to distribute their ids one by one</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default  Home;