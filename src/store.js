import {createStore} from "redux"
import React from "react"
import {Link} from "react-router-dom"



let initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    imageUrl: "",
    monthlyPayment: 0,
    recRent: 0

}

export const ADD_NEW_PROPERTY = "ADD_NEW_PROPERTY"
export const ADD_PROPERTY_URL = "ADD_PROPERTY_URL"
export const PAYMENT_INFO = "PAYMENT_INFO"

function handleInput(e){
    let {name, value} = e.target
    this.setState({
        [name]: value
    })
}
// function handleSubmit(){
//     let newHouse = this.state
//     // console.log(newHouse)
    
//             this.setState({
//                 name: "",
//                 address: "",
//                 city: "",
//                 state: "",
//                 zip: ""
//     })
// }

function reducer(state = initialState, action){
    switch(action){
        case ADD_NEW_PROPERTY:
        
            return (
                <div>
                <input className="wizardInput" placeholder="name" name="name" onChange={handleInput()}></input>
                <input className="wizardInput" placeholder="address" name="address" onChange={handleInput()}></input>
                <input className="wizardInput" placeholder="city" name="city" onChange={handleInput()}></input>
                <input className="wizardInput" placeholder="state" name="state" onChange={handleInput()}></input>
                <input className="wizardInput" placeholder="zip" name="zip" onChange={handleInput()}></input>
                <Link to="/">
                {/* <button onClick={handleSubmit()}>Submit</button> */}
                </Link>
            </div>
            )
        case ADD_PROPERTY_URL:
            return(
            <div>
                <input name="imageUrl">Image URL</input>
            </div>
                )
        case PAYMENT_INFO:
            return(
            <div>
                <input name="monthlyPayment">Monthly Mortgage Amount</input>
                <input name="recRent">Desired Monthly Rent</input>
            </div>
            )
        default: 
        return state
    }
}

export default createStore(reducer)