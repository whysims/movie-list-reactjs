import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { NavBar } from "./components";
import { routes } from "./routes";
import { Router, Switch, Route, useLocation } from "react-router-dom";
import history from "./history";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const AnimateRoute = () => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Switch location={location}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ScrollToTop>
          <NavBar />
          <AnimateRoute />
        </ScrollToTop>
      </Router>
    );
  }
}
