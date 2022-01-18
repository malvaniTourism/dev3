import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "./assets/css/styles.css";

import Index from "./views/index";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import Contact from "./views/Contact";
import Partners from "./views/Partners";
import About from "./views/About";
import ScrollToTop from "./components/Scroll/ScrollToTop";

ReactDOM.render(
  <BrowserRouter basename="/React">
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      {/* <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />*/}
      <Route
        path="/login"
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/register"
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/profile"
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/contact"
        render={(props) => <Contact {...props} />}
      />
      <Route
        path="/partners"
        render={(props) => <Partners {...props} />}
      />
      <Route
        path="/about"
        render={(props) => <About {...props} />}
      />
      <Redirect to="/index" />
      <Redirect from="/" to="/index" />
    </Switch>
    <ScrollToTop />
  </BrowserRouter>,
  document.getElementById("root")
);
