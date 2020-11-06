import React from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row, Media, Button, Progress} from 'reactstrap';
import {element} from "prop-types";


const Quiz3 = (props) => {
    return (
        <Container className="Quiz3">

            <Card>
                <Col sm="12" md={{ size: 6, offset: 5 }}>
                    <Card.Title tag="h2">QUIZ 3</Card.Title>
                </Col>
                <br/>
                <Row>
                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 1</Card.Title>
                            <Card.Text>L'agriculture intensive ?</Card.Text>
                            <input name="q1" type="radio" id="r1" value="0" /><label
                            htmlFor="q1r1">Respecte l'environnement</label>
                            <br/>
                            <input name="q1" type="radio" id="r2" value="1"/><label
                            htmlFor="q1r2">Ne respecte pas l'environnement</label>
                        </Card>
                    </Col>

                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 2</Card.Title>
                            <Card.Text>Les pesticide pollue l'eau ?</Card.Text>
                            <input name="q2" type="radio" id="r3" value="1" /><label
                            htmlFor="q1r1">OUI</label>
                            <br/>
                            <input name="q2" type="radio" id="r4" value="0"/><label
                            htmlFor="q1r2">NON</label>
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 3</Card.Title>
                            <Card.Text>Le bétail et les engrais chimiques seraient responsables de ..% de la pollution atmosphérique ?</Card.Text>
                            <input name="q3" type="radio" id="r5" value="0" /><label
                            htmlFor="q1r1">30%</label>
                            <br/>
                            <input name="q3" type="radio" id="r6" value="1"/><label
                            htmlFor="q1r2">55%</label>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 4</Card.Title>
                            <Card.Text>l’agriculture éco-responsable se focalise sur ?</Card.Text>
                            <input name="q4" type="radio" id="r7" value="1" /><label
                            htmlFor="q1r1">L'environnement</label>
                            <br/>
                            <input name="q4" type="radio" id="r8" value="0"/><label
                            htmlFor="q1r2">Le rendement</label>
                        </Card>
                    </Col>

                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 5</Card.Title>
                            <Card.Text>Les plantes produites par l’agriculture éco-responsable ne sont pas gorgées de pesticides</Card.Text>
                            <input name="q5" type="radio" id="r9" value="0" /><label
                            htmlFor="q1r1">FAUX</label>
                            <br/>
                            <input name="q5" type="radio" id="r10" value="1"/><label
                            htmlFor="q1r2">VRAI</label>
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            <Card.Title tag="h5">Question 6</Card.Title>
                            <Card.Text>L’agriculture éco-responsable s'appuie aussi sur le transport</Card.Text>
                            <input name="q6" type="radio" id="r11" value="1" /><label
                            htmlFor="q1r1">VRAI</label>
                            <br/>
                            <input name="q6" type="radio" id="r12" value="0"/><label
                            htmlFor="q1r2">FAUX</label>
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
        document.getElementById("showresult").innerHTML = "<img src=\"/images/Environnement_allB.png\" height=\"320\" width=\'480\'/>"
    }
    if (totale > 2 && totale <= 3 ){
        document.getElementById("showresult").innerHTML = "<img src=\"/images/Environnement_plastic.png\" height=\'320\' width=\'480\'/>"
    }
    if (totale > 3 && totale <= 5){
        document.getElementById("showresult").innerHTML = "<img src=\"/images/Environnement_sun.png\" height=\'320\' width=\'480\'/>"
    }
    if (totale === 6 ){
        document.getElementById("showresult").innerHTML = "<img src=\"/images/Environnement_allG.png\" height=\'320\' width=\'480\'/>"
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
export default Quiz3;