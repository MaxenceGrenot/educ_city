import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

const SignUpPage = () => (
    <Container>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <h1 className="text-center mt-5 mb-4">Inscription</h1>
                <SignUpForm />
            </Col>
        </Row>
    </Container>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                    });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();

    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Nom d'utilisateur</Form.Label>
                    <Form.Control
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Votre nom et prénom"
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        placeholder="Votre adresse E-mail"
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Votre mot de passe"
                    />
                </Form.Group>

                <Form.Group controlId="formPasswordVerify">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirmé votre mot de passe"
                    />
                </Form.Group>

                <Button disabled={isInvalid} variant="outline-secondary" type="submit">
                    S'inscrire
                </Button>

                {error && <p>{error.message}</p>}
            </Form>
        );
    }
}

const SignUpLink = () => (
    <Container>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <p>
                    Vous n'avez pas de compte? <Link to={ROUTES.SIGN_UP}>S'inscrire</Link>
                </p>
            </Col>
        </Row>
    </Container>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };