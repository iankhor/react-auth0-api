import React from 'react'

//Routes
import NotFound from './NotFound'
import App from './../App';
import Transition from './../Transition';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />  
        <Route path="/transition" exact component={Transition} />  
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes