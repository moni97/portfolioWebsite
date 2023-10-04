import "./testimonials.scss";
import Carousel from 'react-bootstrap/Carousel';

export default function Testimonials() {
    return (
        <div className="testimonials sectionDefault">
            <p className="sectionHeading">What others say?</p>
            <div className="carouselContainer">
                <Carousel>
                    <Carousel.Item>
                    <p>
                        This is the first slide
                    </p>
                    <Carousel.Caption>
                        <h3>First Slide</h3>
                        <p>This is the first slide of the carousel.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <p>
                        This is the seconf slide
                    </p>
                    <Carousel.Caption>
                        <h3>Second Slide</h3>
                        <p>This is the second slide of the carousel.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <p>
                        This is the third slide
                    </p>
                    <Carousel.Caption>
                        <h3>Third Slide</h3>
                        <p>This is the third slide of the carousel.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}