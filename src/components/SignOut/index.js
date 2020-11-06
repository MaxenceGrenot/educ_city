import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignOut} className="btn btn-outline-secondary">
        Deconnexion
    </button>
);

export default withFirebase(SignOutButton);