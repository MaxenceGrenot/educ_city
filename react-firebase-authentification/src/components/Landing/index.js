import React from 'react';

import { withAuthorization } from '../Session';

const LandingPage = () => (
    <div>
        <h1>Landing Page</h1>
        <p>I don't know what is his utility.</p>
        <img src="https://image.shutterstock.com/image-photo/flat-lay-green-leaf-isolated-260nw-1015711927.jpg"></img>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(LandingPage);