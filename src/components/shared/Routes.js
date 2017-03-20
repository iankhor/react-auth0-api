import React from 'react'

//Routes
import NotFound from './NotFound'
import App from './../App';
import LoginTransition from './../LoginTransition';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />  
        <Route path="/auth" exact component={LoginTransition} />  
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes