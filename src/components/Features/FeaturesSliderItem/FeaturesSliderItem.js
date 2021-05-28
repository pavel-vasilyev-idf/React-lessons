import React from 'react';

const FeaturesSliderItem = ({ img, title }) => (
    <div className="features-slider_item">
        <div className="features-img" style={{ backgroundImage: `url('./images/${img}')` }}></div>
        <div className="features-feature">{title}</div>
    </div>
);

export default FeaturesSliderItem;