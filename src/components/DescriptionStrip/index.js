import React from 'react';
import './styles.css';
const DescriptionStrip = ({title,description}) => {
  return (
    <div className="rfDescriptionStrip">
      <h1>{title}</h1>
      <p>
        {description}
      </p>
    </div>
  );
};

export default DescriptionStrip;
