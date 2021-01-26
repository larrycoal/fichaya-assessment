import React,{useReducer} from 'react';
import Home from './Components/Home'
import {Switch,Route}from 'react-router-dom'
import Request from './Components/Request'
import GenerateInv from './Components/Request/GenerateInv'
import PrevInv from './Components/Request/PrevInv'
import {InvContext} from './Utils/InvContext'
import {invReducer,initialState} from './Utils/Invoice'



const App = () => {
  const [state,dispatch]=useReducer(invReducer,initialState)
  return (
    <div>
      <Home>
        <Switch>
          <InvContext.Provider value = {{state,dispatch}}>
          <Route exact path="/" component={Request}/>
          <Route exact path="/request/generateinv" component={GenerateInv}/>
          <Route  exact path="/request/previnv" component={PrevInv}/>
          </InvContext.Provider>
        </Switch>
      </Home>
    </div>
  );
};

export default App;
