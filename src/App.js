import React from 'react';
import Home from './Components/Home'
import {Switch,Route}from 'react-router-dom'
import Request from './Components/Request'
import GenerateInv from './Components/Request/GenerateInv'
import PrevInv from './Components/Request/PrevInv'





const App = () => {
  return (
    <div>
      <Home>
        <Switch>
          <Route exact path="/" component={Request}/>
          <Route exact path="/request/generateinv" component={GenerateInv}/>
          <Route  exact path="/request/previnv" component={PrevInv}/>
        </Switch>
      </Home>
    </div>
  );
};

export default App;
