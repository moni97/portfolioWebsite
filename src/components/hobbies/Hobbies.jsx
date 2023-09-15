import Card from 'react-bootstrap/Card';
import './hobbies.scss';

export default function Hobbies() {
    return (
        <div className="hobbies sectionDefault">
            <p className="sectionHeading">What hobbies do I have?</p>
            <div className="hobbiesTileContainer container">
                <Card className="bg-dark text-white hobbiesCard">
                    <Card.Img src="https://via.placeholder.com/200x200" alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        This is some text on the card overlay. You can add more content here.
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white hobbiesCard">
                    <Card.Img src="https://via.placeholder.com/200x200" alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        This is some text on the card overlay. You can add more content here.
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white hobbiesCard">
                    <Card.Img src="https://via.placeholder.com/200x200" alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        This is some text on the card overlay. You can add more content here.
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    )
}