import {Container, Row, Col, Image} from 'react-bootstrap';
import './hobbies.scss';
import piano from '../../images/piano.png';
import boardGames1 from '../../images/boardGames.jpeg';
import swimmingPool from '../../images/swimming1.jpeg';
import gaming from '../../images/gaming.webp';
import basketBall from '../../images/basketball.webp';

export default function Hobbies() {
    return (
        <div className="hobbies sectionDefault">
            <p className="sectionHeading">What hobbies do I have?</p>
            <div className="hobbiesTileContainer container">
                <Container fluid>
                    <Row className="no-gutters">
                        <Col><Image src={piano} fluid></Image></Col>
                        <Col ><Image src={boardGames1} fluid></Image></Col>
                        <Col><Image src={swimmingPool} fluid></Image></Col>
                    </Row>
                    <Row noGutters>
                        <Col>
                        <Image src={gaming} fluid></Image>
                           
                        </Col>
                        <Col>
                        <Image src={basketBall} fluid></Image>
                            {/* <Card className="bg-dark text-white hobbiesCard">
                                <Card.Img src={basketBall} alt="Card image" />
                                <Card.ImgOverlay>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                {/* <Card.Text>
                                    This is some text on the card overlay. You can add more content here.
                                </Card.Text> */}
                                {/* </Card.ImgOverlay>
                            </Card> */} 
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </div>
    )
}