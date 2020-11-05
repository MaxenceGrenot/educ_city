import React from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row, Button, Progress} from 'reactstrap';

const Sante = (props) => {
    return (

        <Container className="Sante">
            <Card>
                <Card.Header>
                    <h1>Le développement durable</h1>
                </Card.Header>

                <Row>

                    <Col xs = "auto">
                        <h2>Santé :</h2>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs="auto">
                        <h5>Les particules :</h5>
                    </Col>
                </Row>

                <p>Le dépôt et la persistance des particules dans l’appareil respiratoire dépendent de leur taille. Différentes régions de dépôt sont généralement considérées : </p>


                <p>- les particules les plus grossières (diamètre supérieur à 5 μm) sont retenues dans la région nasopharyngée ;</p>
                <p>- les particules les plus fines, inférieures à 1 μm, peuvent atteindre les régions bronchiolaire et alvéolaire où leur persistance dans ces tissus peut être prolongée.</p>

                <p>Les particules présentent des effets néfastes pour la santé à court et long termes, notamment respiratoires et cardiovasculaires. Les populations
                    les plus sensibles sont : foetus, nouveau-nés, enfants, personnes âgées, toute personne atteinte de pathologie cardio-vasculaire ou respiratoire,
                    de diabète, voire d’obésité. Depuis octobre 2013, les particules de l’air ambiant sont classées comme agent cancérigène pour l’homme (groupe 1) par
                    le CIRC sur la base d’un niveau de preuve suffisant d’une association entre exposition et risque augmenté de cancer pulmonaire.
                    Par ailleurs, les particules conduisent au noircissement et à l’encroûtement des bâtiments.</p>
                <br/>
                <br/>

                <Row>
                    <Col xs="auto">
                        <h5>Les oxydes d'azote :</h5>
                    </Col>
                </Row>

                <p>Les NOx participent à la formation de l’ozone sous l’effet du rayonnement solaire et contribuent à la formation des particules de diamètre inférieur
                    à 10 µm et inférieur à 2,5 µm. Ils concourent également au phénomène des pluies acides ainsi qu’à l’eutrophisation des eaux. L’eutrophisation
                    correspond à l’enrichissement excessif des cours d’eau et des plans d’eau en éléments nutritifs, essentiellement le phosphore et l’azote, qui
                    constituent un véritable engrais pour les plantes aquatiques. Elle se manifeste par la prolifération excessive des végétaux dont la décomposition
                    provoque une diminution notable de la teneur en oxygène. Parmi les NOx, le NO2 est la substance la plus nocive pour la santé humaine et ses niveaux
                    sont réglementés dans l’air ambiant. Le NO2 est une substance fortement irritante des voies respiratoires. Les personnes atteintes de maladies
                    respiratoires, les enfants et les adultes de plus de 65 ans semblent y être plus sensibles.</p>

                <br/>
                <br/>

                <Row>
                    <Col xs="auto">
                        <h5>Le monoxyde de carbone :</h5>
                    </Col>
                </Row>



                <p>Le CO est un gaz incolore, inodore et très toxique. Du fait de ses faibles concentrations dans l’air ambiant extérieur, c’est surtout pour l’air
                    intérieur qu’il représente un enjeu sanitaire. En effet, son niveau dans l’air est favorisé par une mauvaise ventilation en milieu clos
                    (embouteillages dans les tunnels, moteurs au ralenti dans les parkings, habitations…) ou par une mauvaise évacuation des produits de combustions
                    (généralement due à des installations mal réglées). Selon le niveau d’exposition, le CO peut provoquer des affections bénignes (vertiges, maux
                    de tête), des problèmes cardiovasculaires ou neurologiques et peut même entrainer des comas ou la mort pour les cas les plus sévères.
                    Par ailleurs, ce gaz participe à l’acidification de l’air, des sols et des cours d’eau. Il concourt aussi à la formation d’ozone troposphérique.</p>

                <br/>
                <br/>

                <Row>
                    <Col xs="auto">
                        <h5>Les métaux lourd :</h5>
                    </Col>
                </Row>

                <p>Dans l’air ambiant, les métaux lourds sont présents sous forme de particules et de gaz. Ces polluants s’accumulent dans l’organisme et peuvent affecter le
                    système nerveux, les fonctions rénales, hépatiques, respiratoires… Leur dépôt sur les surfaces (sols, eaux…) conduit également à une contamination de la
                    chaîne alimentaire.</p>

                <br/>
                <br/>

                <Row>
                    <Col xs="auto">
                        <h5>Les chiffres :</h5>
                    </Col>
                </Row>

                <p>- 1.3 million de personnes meurt chaque année en raison de la pollution (plus de la moitié dans les pays en développement)</p>
                <p>- 5.5 million de personnes son morte par des maladies causées par la pollution de l'aire, soit la population de la Norvège</p>
                <p>- La pollution coute chaque année 225 milliard de dollars</p>
                <p>- La France est le troisiéme pays le plus touché en Europe </p>
                <div className="text-center">40% des cancers en France sont causés par la pollution</div>
                <Progress value="10" />
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 5 }}>
                        <Button className="btn-success">Quiz</Button>
                    </Col>
                </Row>

            </Card>

        </Container>

    );
}

export default Sante;