import React, {Component} from "react"
import {Link, Route} from "react-router-dom"
import axios from "axios"
import store, {ADD_NEW_PROPERTY, ADD_PROPERTY_URL, PAYMENT_INFO} from "../store"

export default class Wizard extends Component{
    
    render(){
        return(
            <div>
                <Route path="/wizard/step1" component={store.ADD_NEW_PROPERTY}/>
                <Route path="/wizard/step2" component={store.ADD_PROPERTY_URL}/>
                <Route path="/wizard/step3" component={store.PAYMENT_INFO}/>
                
                <Link to="/">
                <button>Cancel</button>
                </Link>
                
            </div>
        )
    }
}