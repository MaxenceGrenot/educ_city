import React from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row, Button, Progress} from 'reactstrap';

const Energies = (props) => {
    return (

        <Container className="Energies">
            <Card>
                <Card.Header>
                    <h1>Le développement durable</h1>
                </Card.Header>

                <Row>

                    <Col xs = "auto">
                        <h2>Les énergies :</h2>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs="auto">
                        <h5>Energies fossiles :</h5>
                    </Col>
                </Row>

                <p>L'énergie fossile désigne l'énergie que l'on produit à partir de roches issues de la fossilisation des êtres vivants : pétrole, gaz naturel et
                    houille. Elles sont présentes en quantité limitée et non renouvelable, leur combustion entraîne des gaz à effet de serre responçable de la pollution</p>

                <p>Aujourd'hui, l'utilisation par l'humanité de quantités considérables de combustibles fossiles est à l'origine d'un déséquilibre important du cycle du carbone,
                    ce qui provoque une augmentation de la concentration de gaz à effet de serre dans l'atmosphère terrestre et, par voie de conséquence, entraîne des changements
                    climatiques.</p>

                <p>D'autre part, les réserves de combustibles fossiles de la planète sont fixes et, au rythme de consommation actuel, leur épuisement doit être envisagé. Malgré les
                    violentes polémiques, ce fait est aujourd'hui reconnu, tant par les scientifiques que par les industriels, à quelques nuances chronologiques près. La différence
                    d'échéance se compte en décennie. Dans le cas particulier du pétrole, on parle de pic pétrolier ou de pic de Hubbert.</p>

                <p>Pour donner un ordre de grandeur de la vitesse d'utilisation des combustibles fossiles, on considère que, au rythme actuel, l'humanité aura épuisé en moins de 200
                    ans les réserves accumulées pendant plusieurs centaines de millions d'années (pour fixer les idées, on prendra 200 millions d'années, sachant que le carbonifère
                    dura environ 60 millions d'années). On constate ainsi que l'humanité épuise les réserves de combustibles fossiles environ un million de fois plus vite que ce
                    que la nature a mis pour les constituer.</p>


                <br/>
                <br/>

                <Row>
                    <Col xs="auto">
                        <h5>Energie verte :</h5>
                    </Col>
                </Row>

                <p>Beaucoup de synonymes lorsqu’on parle d’énergie verte, pourtant ces derniers se complètent plutôt bien car si cette énergie est appelé “verte” c’est en partie parce
                    qu’elle est “propre” et “renouvelable”. On est d’accord : si cette définition sonne plutôt bien, elle reste assez limitée. Alors, une énergie verte c’est quoi
                    au fond ? Les énergies vertes proviennent de sources d’énergies qui ne polluent pas (ou très peu comparé aux énergies fossiles) et qui sont durables car
                    inépuisables. Mais qu’est-ce qui est en capacité de produire une telle énergie ? Et bien, il s’agit tout simplement de la nature elle-même. En effet, l’énergie
                    verte est puisée grâce à l’intervention de phénomènes naturels tels que le soleil, le vent, l’eau et ses courants, ou encore la biomasse. Reste alors aux hommes
                    de savoir l’exploiter intelligemment !</p>
                <br/>
                <br/>


                <Row>
                    <Col xs="auto">
                        <h5>Lélectricité verte :</h5>
                    </Col>
                </Row>

                <p>Si vous avez compris ce qui caractérisait une énergie verte, vous n’aurez aucun mal à deviner ce qu’est une électricité verte : elle désigne l’électricité produite grâce
                    aux différentes sources d’énergies renouvelables. Comme nous allons le voir, la nature n’est pas avare en énergies propres, et parmi elles on distingue principalement :</p>

                <p>- Le soleil : Que ce soit par sa chaleur ou sa luminosité, l’énergie solaire peut produire de l’électricité. Les panneaux photovoltaïques installés sur les toits des maisons
                    sont un exemple d’utilisation écologique de l’énergie solaire. Ce sont les cellules photovoltaïques présentes au sein de ces panneaux qui vont venir
                    transformer la lumière du soleil en courant électrique et chauffer les habitations.</p>

                <p>- Le vent : L’énergie cinétique du vent est exploité par les hommes depuis très longtemps, on pense aux moulins à vent notamment. Aujourd’hui les
                    éoliennes fonctionnent selon le même principe et se développent progressivement en France (même si elles sont parfois accusées de dénaturer le
                    paysage). Grâce à l’énergie du vent, l’éolienne fait tourner une turbine à l’intérieur de celle-ci qui produit de l’électricité.</p>

                <p>- L’eau : C’est la force de l’eau, ou pour parler plus scientifiquement, l’énergie hydraulique, qui permettent aux hommes de fabriquer de l’électricité.
                    Comme pour une éolienne, c’est une turbine qui, par le mouvement de l’eau, tourne et est reliée à un générateur produisant de l’électricité. Les barrages
                    sont un exemple d’installation courante en vue de récupérer cette énergie propre. C’est derrière le nucléaire, la deuxième source d’électricité en France</p>

                <p>La biomasse : L’électricité par biomasse provient de la transformation (par combustion ou méthanisation) de matières d’origine végétale ou animale. C’est la chaleur dégagée
                    par la combustion de ces matières (bois, fumiers, déchets agricoles) qui donne lieu à la production d’une électricité verte (mais aussi du biogaz). La biomasse
                    ne date pas d’hier. C’est historiquement la première forme d’énergie découverte par l’homme et c’est actuellement la première source d’énergie renouvelable
                    en France.</p>

                <p>C’est donc grâce à l’intervention de ces différents phénomènes naturels que des fournisseurs d’électricité peuvent nous faire bénéficier d’une électricité verte. Maintenant
                    que nous avons vu les différentes sources d’énergies renouvelables pour l’électricité, qu’en est-il du gaz ?</p>

                <br/>
                <br/>

                <Row>
                    <Col xs="auto">
                        <h5>Le gaz vert ou biogaz :</h5>
                    </Col>
                </Row>

                <p>Le gaz naturel est polluant en raison du CO² qui s’échappe dans l’atmosphère. On entend pourtant peu parler des offres des fournisseurs en biogaz qui nous permettraient de
                    réduire nos émissions de gaz à effet de serre. Le gaz vert ou biogaz est un gaz naturel renouvelable qui est produit par un processus de méthanisation. Il
                    provient des déchets organiques qui par fermentation produisent du biogaz, celui-ci est alors majoritairement composé de méthane. Après épuration, il devient
                    ce qu’on appelle le biométhane et peut servir à la production de chaleur mais aussi d’électricité ! A noter qu’outre le biogaz, des fournisseurs d’énergie
                    proposent aussi des offres de gaz compensé carbone. Le principe est simple : le consommateur paye légèrement plus chère son offre de gaz naturel et en
                    contrepartie le fournisseur s’engage à financer des actions en vue de réduire les émissions de gaz à effet de serre sur différentes parties du globe.</p>

                <Row>
                    <Col sm="12" md={{ size: 6, offset: 5 }}>
                        <Button className="btn-success">Quiz</Button>
                    </Col>
                </Row>

            </Card>

        </Container>

    );
}

export default Energies;