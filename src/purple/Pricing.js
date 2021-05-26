import React from 'react'
import './Pricing.css'

function Pricing() {
  return (
    <div className="pricing">
      <h2>Pricing</h2>
      <p>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        facilisis.
      </p>
      <div className="plans">
        <div className="col-1">
          <li>5 Users</li>
          <li>TB Space</li>
          <li>Community Forums</li>
          <li>Email Support</li>
        </div>
        <div className="col-2">
          <li>25 to 99 Users</li>
          <li>10 TB space</li>
          <li> Source Files</li>
          <li>Live Chat</li>
        </div>
        <div className="col-3">
          <li>100 users or more</li>
          <li>80 TB space</li>
          <li>Full Access sources</li>
          <li>Full Access sources</li>
          <li>Live Chat</li>
          <li>Customizations</li>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
