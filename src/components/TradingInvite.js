// TradingInvite.js
import React from 'react';
import './TradingInvite.css';

const TradingInvite = () => {
  return (
    <div className="trading-invite">
      <header className="trading-header">
        <h1>Slow, Yea We Don’t Do That Here! Earn Points By Trading!</h1>
        <div className="trading-stats">
          <div>10X Faster TX Speeds</div>
          <div>0% Marketplace Fees</div>
          <div>2X Points</div>
          <div>133,000 Users</div>
        </div>
      </header>
      <div className="trading-question">
        <h2>Which Inscription Club You Joining Anon</h2>
      </div>
      <div className="trading-cards">
        {/* Repeat the structure below for each membership card */}
        <div className="trading-card">
          <h3>&lt;1K</h3>
          <p>Sub &lt;1K</p>
          <div className="card-details">
            <span>FLOOR PRICE</span>
            <span>Ξ 0.03</span>
            <button>See Collection</button>
          </div>
        </div>
        <div className="trading-card">
          <h3>&lt;1K</h3>
          <p>Sub &lt;1K</p>
          <div className="card-details">
            <span>FLOOR PRICE</span>
            <span>Ξ 0.03</span>
            <button>See Collection</button>
          </div>
        </div>
        <div className="trading-card">
          <h3>&lt;1K</h3>
          <p>Sub &lt;1K</p>
          <div className="card-details">
            <span>FLOOR PRICE</span>
            <span>Ξ 0.03</span>
            <button>See Collection</button>
          </div>
        </div>
        {/* ... other cards */}
      </div>
    </div>
  );
};

export default TradingInvite;
