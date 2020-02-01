import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuth } from './auth';


import Login from "./pages/login";
import Home from "./pages/home"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (  //redefinir o render

    isAuth() ? (<Component {...props} />
    ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />)
  )} />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* exact  define a rota como sendo extamente '/' */}
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
