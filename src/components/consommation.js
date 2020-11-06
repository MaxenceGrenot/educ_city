import React from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row, Media, Button, Progress} from 'reactstrap';

const Consommation = (props) => {
    return (

        <Container className="Consommation">
            <Card>
                <Card.Header>
                    <h1>Le développement durable</h1>
                </Card.Header>

                <Row>
                    <Col xs = "auto">
                        <h2>Consommation :</h2>
                    </Col>
                </Row>

                <Row>
                    <Col xs="auto">
                        <h5>Surconsommation :</h5>
                    </Col>
                </Row>

                <p>En France, plus de 2,3 millions de tonnes de nourriture seraient gaspillés dans la distribution, 1,5 million de tonnes dans la restauration
                    et 6,5 millions de tonnes au sein même des foyers.
                    Pour se faire une idée que représente l’importance de ces quantités, nous allons vous donner un exemple.
                    Pour produire un kilo de blé il faut 590 litres d’eau. Un kilogramme de blé permet de faire 750 grammes de farine blanche. Ajoutez 450 grammes
                    d’eau, 20 grammes de sel et la levure… de quoi faire en gros 1.200 grammes de pâte, presque 5 baguettes de 250 grammes. Alors toute les 5 baguettes
                    de pain jetées à la poubelle correspond à une baignoire entière.</p>


                <div className="text-center">40% de la nourriture jetée, qui aurait pu être consommée, sont des fruits et légumes frais.</div>
                <Progress value="40" />
                <br/>
                <p>La viande, le poisson, le pain. Les autres produits boulangers, les produits laitiers, le riz et les pâtes font également partie des denrées alimentaires
                    les plus souvent gaspillées. De nombreuse ONG participent à la lutte contre le gaspillage, la surconsommation et à la réduction des déchets. Ces ONG proposent
                    sur leur site de nombreux articles
                    avec des faits, des exemples, des astuces et des moyens afin de pouvoir mieux comprendre le problème du gaspillage et son ampleur. L’objectif des ONG est de
                    nous amener à se sentir vraiment concerner par ce problème et à nous unir en faisant des gestes pour le combattre.</p>

                <br/>
                <br/>

                <Row>

                    <Col xs="auto">
                        <h5>Consommation durable :</h5>
                    </Col>
                </Row>

                <p>La consommation durable est le fait de consommer d’une façon permettant de préserver au maximum nos ressources et l’environnement.
                    Ce terme va de pair avec celui de développement durable. La consommation durable comporte trois dimensions :</p>
                <p>- Mieux acheter (en privilégiant les produits issus de l’agriculture biologique)</p>
                <p>- Moins gaspiller</p>
                <p>- Plus recycler</p>

                <br/>
                <br/>

                <Row>

                    <Col xs="auto">
                        <h5>Consommation responsable :</h5>
                    </Col>
                </Row>

                <p>Une consommation responsable respecte l’environnement, l’équité sociale et économique. Celle-ci est en relation avec le commerce équitable.
                    La consommation responsable est plus large que la consommation durable. Celle-ci comporte plusieurs dimensions :</p>

                    <p>- Consommer des produits en fonction de leur respect des normes sociales et de leur impact sur les sociétés (produits fabriqués dans de bonnes conditions de travail, en coopération avec des producteurs de proximité…)</p>
                    <p>- Acheter des produits « sains » et qui respectent les normes sanitaires (composition nutritionnelle saine, pas de pesticides…) et notre écologie</p>
                    <p>- Choisir aussi des produits respectant certains principes éthiques ou moraux (respect du bien-être animal, travail des enfants, par exemple)</p>

                <Row>
                    <Col sm="12" md={{ size: 6, offset: 5 }}>
                        <Button className="btn-success">Quiz</Button>
                    </Col>
                </Row>

            </Card>

        </Container>

    );
}

export default Consommation;