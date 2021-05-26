import React from 'react';
import Store from './Store';
import './Storelist.css';
import tab1 from './imag/tab-item-01.png';
import tab2 from './imag/tab-item-02.png';
import tab3 from './imag/tab-item-03.png';
import tab4 from './imag/tab-item-04.png';
import tab5 from './imag/tab-item-05.png';
import tab6 from './imag/tab-item-06.png';

function Storelist() {
    return (
        <div className="storelist">
            <div className="content">
              <Store img={tab1} name="Fresh Chicken Salad" name2="Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do." />
              <Store img={tab2} name="Orange Juice" name2="Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do." />
              <Store img={tab3} name="Fruit Salad" name2="Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do." />
              <Store img={tab4} name="Eggs Omelette" name2="Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do." />
              <Store img={tab5} name="Dollma Pire" name2="Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do." />
              <Store img={tab6} name="Omelette Cheese" name2="Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do." />
            </div>
        </div>
    )
}

export default Storelist


 
