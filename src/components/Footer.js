import { Container, Image } from "react-bootstrap";
import gmail from '../images/gmail.png';
import fb from '../images/facebook.png';

function Footer() {
    return (
        <div>
            <Container className="py-5 text-center text-secondary lh-1">
                <p className="fs-4">Get in touch!</p>
                <p className="fs-6">Connect with me via the following;</p>
                <p>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWtMlQpPnFMxbFZpHJFTXrDcvbvzCZqBmLHtTpSvKTRZZNfdwtqKxffjFFMSmpvJDDPVDkTqb"><Image src={gmail} className="bg-secondary p-2 rounded-5 me-4 mt-2"/></a>
                    <a href="https://web.facebook.com/kirt.bsyles"><Image src={fb} fluid className="w-30 border border-3 border-sm-dark mt-2 bg-dark rounded-5"/></a>
                </p>

            </Container>
        </div>
    );
}
export default Footer;