import "./contact.scss";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ContactLogo from '../../images/call-me.png';

export default function Contact() {
    return (
        <div className="contact sectionDefault">
            <p className="sectionHeading">Get in touch</p>
            <div className="contactContainer">
                <div className="contactForm container">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <i className="fa-regular fa-user"></i>
                        </InputGroup.Text>
                        <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <i className="fa-regular fa-envelope"></i>
                        </InputGroup.Text>
                        <Form.Control
                        placeholder="email"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>
                            <i className="fa-regular fa-message"></i>
                        </InputGroup.Text>
                        <Form.Control className="textarea" as="textarea" placeholder="message" aria-label="With textarea" />
                    </InputGroup>
                    <Button variant="secondary">Submit</Button>{' '}
                </div>
                <div className="contactCard">
                    <p className="contactPhoto">
                        <img alt="" src={ContactLogo}></img>
                    </p>
                </div>
            </div>
        </div>
    )
}