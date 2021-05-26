import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'

import city from '../project2/banner.png'







function App() {
    return (
        <div className="App"> 

            <Card1 name="kitu" age="22" image={city}>
              <h1>child prop</h1>
            </Card1>
            <Card2 name="kava" age="21">

            </Card2>
            
        </div>
    )
}

export default App;

