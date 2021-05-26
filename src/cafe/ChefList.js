import React from 'react';
import Chefs from './Chefs';
import chef1 from './images/chefs-01.jpg';
import chef2 from './images/chefs-02.jpg';
import chef3 from './images/chefs-03.jpg';
import './ChefList.css'

export default function ChefList() {
  return (
    <div>
      <div className="headings">
        <h2>Our Chefs</h2>
        <h3>Best Chefs</h3>
      </div>

      <div className="ChefList">
        <Chefs name="Randy Walker" name2="Oasrt chef" image={chef1} />
        <Chefs name="Randy Walker2" name2="Oasrt chef2" image={chef2} />
        <Chefs name="Randy Walker3" name2="Oasrt chef3" image={chef3} />
      </div>
    </div>
  );
}
