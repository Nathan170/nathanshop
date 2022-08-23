import React from "react";
import Navbar from "./Navbar"
import Home from "./Home"
import "./index.css";
import Shop from "./Shop";
import Blog from "./Blog";
import Ourstory from "./Ourstory";
import Sale from "./Sale";
import Contactus from "./Contactus";
import {Route,Switch} from "react-router-dom";
function App() {
  return(
    <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/story" component={Ourstory}/>
            <Route exact path="/sale" component={Sale}/>
            <Route exact path="/contact" component={Contactus}/>
            <Route component={Home}/>
        </Switch>
    </>
  );
}

export default App;
