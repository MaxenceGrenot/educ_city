import React from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row, Media, Button} from 'reactstrap';

const Introduction = (props) => {
    return (

        <Container className="Introduction">
            <Card>
                <Card.Header>
                    <h1>Le développement durable</h1>
                </Card.Header>

                <Row>
                    <Col xs = "auto">
                        <h2>Les enjeux et l'objectif :</h2>
                    </Col>
                </Row>

                <Row>
                    <Col xs="auto">
                        <h5>Définition :</h5>
                    </Col>
                </Row>

                <p>Le développement : est le fait pour quelque chose de progresser, de s'accroître, de prendre de l'importance ; essor, expansion.</p>
                <p>Durable : De nature à durer longtemps, qui représente une certaine stabilité, une certaine résistance et qui prend en compte l'avenir</p>
                <p> Développement durable : le développement durable est un développement qui répond aux besoins du présent sans compromettre la capacité
                    des générations futures de répondre aux leurs</p>

                <Row>

                    <Col xs="auto">
                        <h5>Histoire :</h5>
                    </Col>
                </Row>

                <p>1909 : Theodore Roosevelt tient un discours dans lequel il se préoccupe de la destruction des ressources naturelles et des générations futures
                    : « Avec la croissance constante de la population et l’augmentation encore plus rapide de la consommation, notre peuple aura besoin de plus
                    grandes quantités de ressources naturelles. Si nous, de cette génération, détruisons les ressources, […] qui seront nécessaires à nos enfants,
                    si nous réduisons la capacité de notre terre à soutenir une population, nous diminuons le niveau de vie, nous enlevons même le droit à la vie
                    des générations futures sur ce continent ».</p>

                <p>1949 : le président des États-Unis, Harry S. Truman, dans son discours sur l'état de l'Union, popularise le mot « développement » en prônant une
                    politique d'aide aux pays sous-développés, grâce à l'apport de la connaissance technique des pays industrialisés. Il affirme que « tous les pays,
                    y compris les États-Unis, bénéficieront largement d'un programme constructif pour une meilleure utilisation des ressources mondiales humaines
                    et naturelles ».</p>

                <p>1951 :
                    L'Union internationale pour la conservation de la nature publie le premier rapport sur l'état de l'environnement dans le monde.
                    Convention internationale pour la protection des végétaux, conclue à Rome le 6 décembre 1951.</p>

                <p>1954 : Convention internationale pour la prévention de la pollution des eaux de mer par les hydrocarbures, conclue à Londres le 12 mai 1954.</p>

                <p>1967 : publication du livre de Roderick Nash, Wilderness and the American Mind, parfois considéré comme le texte fondateur de l’histoire
                    de l'environnement</p>

                <p>1973 : Convention sur le commerce international des espèces de faune et de flore sauvages menacées d'extinction (Convention de Washington)</p>

                <p>1980 : l'Union internationale pour la conservation de la nature publie un rapport intitulé La stratégie mondiale pour la conservation
                    où apparaît pour la première fois la notion de « développement durable », traduite de l'anglais sustainable development.</p>

                <p>1987 : une définition du développement durable est proposée par la Commission mondiale sur l'environnement et le développement (rapport Brundtland).</p>

                <p>1995 : mars : conférence générale de l'Organisation des Nations unies pour l'éducation, la science et la culture (Unesco) à Séville, établissant
                    un cadre statutaire pour les réserves de biosphère ainsi que la première Conférence des parties (COP) à Bonn</p>

                <p>2009 : conférence de Copenhague de 2009 sur les changements climatiques.</p>

                <p>2015 :
                    18 juin : publication de l'encyclique Laudato si' du pape François « sur la sauvegarde de la maison commune » ; François s'empare de la question
                    écologique et propose une démarche fondée sur l'écologie intégrale ;
                    28 et 29 novembre : premières marches mondiales pour le climat ;
                    30 novembre au 12 décembre : conférence de Paris de 2015 sur les changements climatiques (COP21) ;</p>

                <Row>
                    <Col sm="12" md={{ size: 6, offset: 5 }}>
                        <Button className="btn-success">Quiz</Button>
                    </Col>
                </Row>

            </Card>

        </Container>

    );
}

export default Introduction;