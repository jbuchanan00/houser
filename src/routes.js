import React from "react"
import {Switch, Route} from "react-router-dom"
import Wizard from "./components/Wizard"
import Dashboard from "./components/Dashboard"


export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/wizard/step1" component={Wizard} />
    </Switch>
)