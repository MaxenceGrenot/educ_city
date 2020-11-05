import React from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row, Button, Progress} from 'reactstrap';

const Agriculture = (props) => {
    return (

        <Container className="Agriculture">
            <Card>
                <Card.Header>
                    <h1>Le développement durable</h1>
                </Card.Header>

                <Row>

                    <Col xs = "auto">
                        <h2>Agriculture :</h2>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs="auto">
                        <h5>Agriculture intensive :</h5>
                    </Col>
                </Row>

                <p>L'agriculture intensive est accusée d'être pratiquée aux dépens des considérations environnementales et climatiques, d'où son rejet par un certain
                    nombre de producteurs et de consommateurs. Le bilan négatif des exportations de matière organique se traduit par une perte d'humus et que les engrais
                    et les pesticides contribuent à une dégradation de la qualités du sol et que le drainage et l'arrosage ont des conséquences négatives.
                    L'eau est une resource vitale inégalement répartie sur la terre, à cause de l'utilisation des pesticides l'arrosage des plantes enméne avec lui des
                    particules nocives qui entraine la pollutions des nappe phréatique. </p>


                


                <p>Le bétail et les engrais chimiques seraient responsables de 55% de la pollution atmosphérique liée aux activités humaines, d’après une étude réalisée
                    par l’Institut de la Terre à l’Université de Colombia. Il a fallu longtemps pour établir le lien entre la pollution aux particules fines et l’ammoniac
                    provenant des sources agricoles. Mais les chiffres sont assez préoccupants. Et les pays les plus riches, comme ceux de l’Union Européenne, sont les
                    principaux touchés.</p>

                <div className="text-center">l'agriculture est responçable de 55% de la pollution</div>
                <Progress value="55" />

                <br/>
                <br/>

                <Row>
                    <Col xs="auto">
                        <h5>Agriculture eco-responçable :</h5>
                    </Col>
                </Row>

                <p>Contrairement à l’agriculture intensive et classique, l’agriculture éco-responsable se focalise principalement sur le respect de l’environnement et
                    non sur le rendement de la production. Pour ce faire, l’agriculture éco-responsable emploie les produits chimiques et les OGM au strict minimum.
                    En effet, les agriculteurs produisant dans cette pratique doivent demander l’aval de la chambre d’agriculture pour employer ce type de produits,
                    et uniquement en dernier recours afin de sauver une récolte d’une maladie ou champignon tenace et après avoir employé toutes les méthodes saines pour
                    l’environnement.
                    En plus des restrictions sur les produits, l’agriculture éco-responsable se focalise sur une production demandant le moins d’eau possible.
                    L’état actuel des nappes phréatiques et autres sources d’eau potable étant alarmant, cet objectif pourrait à long terme permettre aux sources de
                    retrouver un état plus sain.
                    Pour atteindre cet objectif, les agriculteurs privilégient une pousse en plein air et fatigant peu la terre. La terre des cultures intensives et
                    classiques est à ce jour épuisée par l’usage des produits chimiques et n’absorbe plus l’eau des pluies. La plante a donc besoin d’une source extérieure pour s’hydrater. En agriculture éco-responsable, la terre est en meilleure santé et absorbe l’eau de pluie, donnant aux plantes tout ce dont elle ont besoin. Retrouvez en livraison corbeilles de fruits et panier de fruits et légume en livraison dans les grande ville de France
                    Un enjeu sanitaire
                    En respectant les objectifs écologiques fixés par l’agriculture éco-responsable, les produits qui en sont issus sont bien meilleurs, aussi bien pour la
                    santé que au goût.
                    Les plantes produites par l’agriculture éco-responsable ne sont pas gorgées de pesticides, par conséquent, celles que l’on mange et les animaux qui les
                    mangent ne sont pas dangereux pour notre santé, en risquant une intoxication ou un empoisonnement car le produit était mal nettoyé.
                    De plus, les plantes ayant grandi en plein soleil et avec moins d’eau, possèdent plus de chair et moins de liquide à l’intérieur. Le goût y est plus prononcé,
                    ce qui ravira les consommateurs.
                    Même si l’agriculture éco-responsable se focalise principalement sur la culture, par rapport à l’agriculture raisonnée, ils essaient d’aller plus loin. En effet,
                    ils appuient aussi leurs efforts sur les transports des produits, en favorisant les circuits courts, limitant les émissions de gaz à effet de serre durant les transports. Il existe aussi toute une logistique sur le conditionnement des produits permettant de respecter au maximum l’environnement.
                    Tous ces objectifs permettent donc d’améliorer la santé des êtres vivants mais aussi celle de la planète en ayant des principes sur le long terme, ayant pour but
                    de ne jamais épuiser les ressources de la planète.</p>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 5 }}>
                        <Button className="btn-success">Quiz</Button>
                    </Col>
                </Row>

            </Card>

        </Container>

    );
}

export default Agriculture;