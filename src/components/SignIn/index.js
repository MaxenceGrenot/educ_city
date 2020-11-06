import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

const SignInPage = () => (
    <Container fluid>
        <Row>
            <Col>
                <h1 className="text-center mt-5 mb-4">Connexion</h1>
                <SignInForm />
                <PasswordForgetLink />
                <SignUpLink />
            </Col>
        </Row>
    </Container>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.onSubmit}>
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
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.onChange}
                                    placeholder="Votre Mot de passe" />
                            </Form.Group>
                            <Button disabled={isInvalid} variant="primary" type="submit">
                                Connexion
                        </Button>
                        </Form>
                        {error && <p>{error.message}</p>}
                    </Col>
                </Row>
            </Container >
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };