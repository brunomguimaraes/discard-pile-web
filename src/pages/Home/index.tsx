
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/sample-logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Discard" />
                    <span>Discard Pile</span>
                </header>
                <main>
                    <h1>
                        Your waste collection marketplace.
                    </h1>
                    <p>
                        We help people find collection points to discard their waste.
                    </p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>
                            Register a collection point
                        </strong>
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Home;
