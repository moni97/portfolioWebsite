import "./projectGallery.scss";
import Button from 'react-bootstrap/Button';
import {Card, Row, Col} from 'react-bootstrap';
import coding from '../../images/coding.jpeg';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';


export default function ProjectGallery({data}) {
    const [filterValue, setFilterValue] = useState('All');

    const allTags = data.flatMap((item) =>
        item.Tags.split(',').map((tag) => tag.trim())
    );
    const uniqueTags = Array.from(new Set(allTags));
    
    function onTagFilterChanged(event) {
        setFilterValue(event.target.value);
    }

    uniqueTags.unshift("All");
    return <>
        <div className="projectGallery">
            <div className="filters">
                <Form.Select aria-label="Default select example" value={filterValue} onChange={(event) => {onTagFilterChanged(event);console.log(event);}}>
                    {
                        uniqueTags.map((tag, index) => (
                            <option value={tag} key={index}>{tag}</option>
                        ))
                    }
                </Form.Select>
            </div>
            <Row>
                {
                    // console.log(displayData);
                    data
                    .filter(card => filterValue === 'All' || card['Tags'].toString().replace(/\s*,\s*/g, ",").trim().split(",").includes(filterValue))
                    .map((data, index) => (
                    <Col key={index} sm={6} md={3} lg={4}>
                       <Link to={`/portfolioWebsite/projects/${data['ID column']}`}>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={coding} />
                                <Card.Body>
                                    <Card.Title>{data['Name']}</Card.Title>
                                    { data['Github'] && <Button variant="outline-secondary" href={data['Github']}><i className="fa-brands fa-github"></i></Button>}
                                </Card.Body>
                                <Card.Footer className="text-muted">{data['Tags']}</Card.Footer>
                            </Card>
                       </Link> 
                    </Col>
                ))
            }
            </Row>
            
        </div>
    </>
}