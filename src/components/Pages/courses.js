import React from "react";
import { Card } from "react-bootstrap";
import { Button } from 'reactstrap';
import { Container, Col, Row } from 'reactstrap';

const Courses = (props) => {
    return (
        <Container className="Courses">
            <Card>
                <Card.Header as="h5">Cours développement durable</Card.Header>
                    <Row>
                        <Col>
                            <Card style={{width:'15rem'}}>

                                <Card.Img variant="top" src="/images/history.png"/>
                                <Card.Body>
                                    <Card.Title>Introduction</Card.Title>
                                    <Button className="btn-success">Commencer</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{width:'15rem'}}>
                                <Card.Img variant="top" src="/images/target.png"/>
                                <Card.Body>
                                    <Card.Title>Les enjeux et les objectifs</Card.Title>
                                    <Button className="btn-success">Commence</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{width:'15rem'}}>
                                <Card.Img variant="top" src="/images/planting.png"/>
                                <Card.Body>
                                        <Card.Title>Agriculture</Card.Title>
                                        <Button className="btn-success">Commencer</Button>
                                    </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <Card style={{width:'15rem'}}>
                                <Card.Img variant="top" src="/images/market.png"/>
                                <Card.Body>
                                    <Card.Title>Consommation</Card.Title>
                                    <Button className="btn-success">Commencer</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{width:'15rem'}}>
                                <Card.Img variant="top" src="/images/healthcare.png"/>
                                <Card.Body>
                                    <Card.Title>Santé</Card.Title>
                                    <Button className="btn-success">commencer</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{width:'15rem'}}>
                                <Card.Img variant="top" src="/images/thunderbolt.png"/>
                                <Card.Body>
                                    <Card.Title>Les énergies</Card.Title>
                                    <Button className="btn-success">Commencer</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Card>
        </Container>
    );
}

export default Courses;