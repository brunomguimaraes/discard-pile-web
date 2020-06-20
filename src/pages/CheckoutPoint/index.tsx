import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './styles.css';

const CheckoutPoint = () => {
    const history = useHistory();

    setTimeout(() => { history.push('/'); }, 2000);

    return (
        <div id="page-checkout-point">
            <div className={"content"}>
                <FiCheckCircle />
                <h1>Registration completed !</h1>
            </div>
        </div>
    );
};

export default CheckoutPoint;
