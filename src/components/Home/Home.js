import React, { useState } from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = (props) => {
    return (
        <>
            <div className="App">
                <div className="wraper">
                    <div className="logo">
                        <img src="/images/logo.png" alt="" />
                    </div>
                </div>

                <div class="welcome-text">
                    <h1>La ville de demain est à vous</h1>
                </div>

                <div>
                    <Jumbotron>
                        <h1 className="display-3">Bienvenue sur Educ'City!</h1>
                        <hr className="my-2" />
                    </Jumbotron>
                </div>

            </div>
        </>
    )
}

export default Home;
