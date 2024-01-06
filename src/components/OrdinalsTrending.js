import React from 'react';
import './OrdinalsTrending.css';

const OrdinalsTrending = ({ ordinals }) => {
  return (
    <div className="ordinals-trending">
      <div className="title">
        <h1>Trending Top</h1>
        <button className="dashboard-button">LAUNCH TRADING DASHBOARD</button>
      </div>
      <div className="ordinal-header">
        <span>COLLECTION</span>
        <span>FLOOR PRICE</span>
        <span>24HR CHANGE</span>
        <span>24HR VOLUME</span>
        <span>OWNERS</span>
        <span>SUPPLY</span>
      </div>
      {ordinals.map((ordinal, index) => (
        <div key={index} className="ordinal-item">
          <img src={ordinal.image} alt={ordinal.name} />
          <span>{ordinal.name}</span>
          <span>{ordinal.floorPrice} ₿</span>
          <span className={ordinal.change < 0 ? 'negative' : 'positive'}>
            {ordinal.change}%
          </span>
          <span>{ordinal.volume} ₿</span>
          <span>{ordinal.owners}</span>
          <span>{ordinal.supply}</span>
        </div>
      ))}
      
    </div>
  );
};

export default OrdinalsTrending;
