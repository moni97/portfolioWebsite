import "./testimonials.scss";
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import testimonialsCSV from "../../data/csv/testimonials.csv";
import Papa from 'papaparse';

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(testimonialsCSV);
            const text = await response.text();
      
            Papa.parse(text, {
              header: true, // Use the first row as headers
              dynamicTyping: true, // Automatically convert numbers and booleans
              complete: (result) => {
                setTestimonials(result.data);
              },
              error: (error) => {
                console.error('CSV parsing error:', error.message);
              },
            });
          };
      
          fetchData();
        },
    []);

    return (
        <div className="testimonials sectionDefault">
            <p className="sectionHeading">What others say?</p>
            <div className="carouselContainer">
                <Carousel slide={false}>
                    {
                        testimonials.map((tag, index) => (
                            <Carousel.Item key={index}>
                                <p className="highlight">{tag['Highlight']}</p>
                                {/* <ExampleCarouselImage text={tag['Highlight']}></ExampleCarouselImage> */}
                                <Carousel.Caption>
                                    <h3>{tag['Name']}</h3>
                                    <p>{tag['Connection']}</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}