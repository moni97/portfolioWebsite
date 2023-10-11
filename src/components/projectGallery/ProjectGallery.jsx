import "./projectGallery.scss";
import Button from 'react-bootstrap/Button';
import {Card, Row, Col} from 'react-bootstrap';
import coding from '../../images/coding.jpeg';
import { useState } from 'react';

export default function ProjectGallery({data}) {
    const [filterValue, setFilterValue] = useState();
    const allTags = data.flatMap((item) =>
        item.Tags.split(',').map((tag) => tag.trim())
    );

    const uniqueTags = Array.from(new Set(allTags));
    uniqueTags.unshift("All");
    return <>
        <div className="projectGallery">
            <dix className="filters">
                <select>
                    {
                        uniqueTags.map(tag => (
                            <option value={tag} onSelect={(event) => setFilterValue(event)}>{tag}</option>
                        ))
                    }
                </select>
            </dix>
            <Row>
                {data.map((data, index) => (
                    <Col key={index} sm={6} md={3} lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={coding} />
                            <Card.Body>
                                <Card.Title>{data['Name']}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="outline-secondary"><i class="fa-brands fa-github"></i></Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">{data['Tags']}</Card.Footer>
                        </Card>
                    </Col>
                ))
            }
            </Row>
            
        </div>
    </>
}