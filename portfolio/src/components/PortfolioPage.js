import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => (
    <div>
        <p>Awesome projects list:</p>
        <ol>
            <li><Link to="/portfolio/123">n°123</Link></li>
            <li><Link to="/portfolio/abc">ABC</Link></li>
        </ol>
    </div>
);

export default PortfolioPage;