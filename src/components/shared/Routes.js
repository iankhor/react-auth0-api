import React from 'react'

//Routes
import NotFound from './NotFound'
import App from './../App';
import PageOne from './../PageOne'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />  
        <Route path="/PageOne" component={PageOne} />  
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes