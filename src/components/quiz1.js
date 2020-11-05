import React from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row, Media, Button, Progress} from 'reactstrap';
import {element} from "prop-types";


const Quiz1 = (props) => {
    return (
        <Container className="Quiz1">

            <Card>
                <Col sm="12" md={{ size: 6, offset: 5 }}>
                <Card.Title tag="h2">QUIZ 1</Card.Title>
                </Col>
                <br/>
                <Row>
                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 1</Card.Title>
                            <Card.Text> En quelle anéée, Theodore Roosevelt tient t'il un discours dans lequel il se préoccupe de la destruction des ressources naturelles ?</Card.Text>
                                <input name="q1" type="radio" id="r1" value="0" /><label
                                htmlFor="q1r1">1912</label>
                            <br/>
                                <input name="q1" type="radio" id="r2" value="1"/><label
                                htmlFor="q1r2">1909</label>
                        </Card>
                    </Col>

                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 2</Card.Title>
                            <Card.Text>En 1949 quel président des États-Unis, dans son discours sur l'état de l'Union, popularise le mot « développement » ?</Card.Text>
                            <input name="q2" type="radio" id="r3" value="1" /><label
                            htmlFor="q1r1">Harry S. Truman</label>
                            <br/>
                            <input name="q2" type="radio" id="r4" value="0"/><label
                            htmlFor="q1r2">Franklin Delano Roosevelt</label>
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 3</Card.Title>
                            <Card.Text>En quelle année, une définition du développement durable est proposée par la Commission mondiale sur l'environnement ?</Card.Text>
                            <input name="q3" type="radio" id="r5" value="1" /><label
                            htmlFor="q1r1">1987</label>
                            <br/>
                            <input name="q3" type="radio" id="r6" value="0"/><label
                            htmlFor="q1r2">1993</label>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 4</Card.Title>
                            <Card.Text>Date de la première Conférence des parties (COP) .</Card.Text>
                            <input name="q4" type="radio" id="r7" value="1" /><label
                            htmlFor="q1r1">1995</label>
                            <br/>
                            <input name="q4" type="radio" id="r8" value="0"/><label
                            htmlFor="q1r2">2000</label>
                        </Card>
                    </Col>

                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 5</Card.Title>
                            <Card.Text> Dans qu'elle ville à eu lieu la première COP ?</Card.Text>
                            <input name="q5" type="radio" id="r9" value="0" /><label
                            htmlFor="q1r1">Séville</label>
                            <br/>
                            <input name="q5" type="radio" id="r10" value="1"/><label
                            htmlFor="q1r2">Bonn</label>
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 6</Card.Title>
                            <Card.Text>La convention internationale pour la prévention de la pollution des eaux de mer par les hydrocarbures, conclue le 12 mai 1954</Card.Text>
                            <input name="q6" type="radio" id="r11" value="1" /><label
                            htmlFor="q1r1">Washington</label>
                            <br/>
                            <input name="q6" type="radio" id="r12" value="0"/><label
                            htmlFor="q1r2">Séville</label>
                        </Card>
                    </Col>
                </Row>
            </Card>
            <br/>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 5 }}>
                <Button className="btn-success" onClick={True}>Verifier</Button>
                </Col>
                    <h1 id="test">0</h1>
                    <h1> /6</h1>
        </Row>

            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }} id='showresult'>
                    <div >

                    </div>
                </Col>
            </Row>

        </Container>

    );
}
function ShowCity(totale) {

    if(totale<=2){
        document.getElementById("showresult").innerHTML = "<img src=\"/public/images/Environnement_allB.png.png\" height=\"320\" width=\'480\'/>"
    }
    if (totale > 2 && totale <= 3 ){
        document.getElementById("showresult").innerHTML = "<img src=\"/public/images/Environnement_plastic.png.png\" height=\'320\' width=\'480\'/>"
    }
    if (totale > 3 && totale <= 5){
        document.getElementById("showresult").innerHTML = "<img src=\"/public/images/Environnement_sun.png.png\" height=\'320\' width=\'480\'/>"
    }
    if (totale === 6 ){
        document.getElementById("showresult").innerHTML = "<img src=\"/public/images/Environnement_allG.png.png\" height=\'320\' width=\'480\'/>"
    }

}

function True() {
    var totale = 0;
    for (let i =1; i < 13; i++) {
        if (document.getElementById('r'+i).checked){
            var wait = parseInt(document.getElementById('r'+i).value);
            totale = totale + wait;
        }
    }
    document.getElementById("test").innerHTML = totale;
    ShowCity(totale);
}
export default Quiz1;