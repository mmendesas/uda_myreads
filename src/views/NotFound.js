import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../img/page_not_found.png';

const NotFound = () => (
        <div className="center">
            <img alt="not found" src={PageNotFound} />
            <div>
                <h3>No match for <code>{window.location.pathname}</code></h3>
            </div>
            <Link to="/">Return to Home Page</Link>
        </div>
);

export default NotFound;