import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <p>Awesome project n°{props.match.params.id}</p>
    </div>
);

export default PortfolioItemPage;