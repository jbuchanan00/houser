import React, {Component} from "react"

export default class House extends Component{
    
    render(){
        // console.log(this.props.houses)
        return(
            <div className="container">
                {this.props.houses.map((houses) => {
                
                return  (<div className="individualHouses">
                            <h2 key={houses.id}>Property Name: {houses.name}</h2>
                            <h5>Address: {houses.address}</h5>
                            <h5>City: {houses.city}</h5>
                            <h5>State: {houses.state}</h5>
                            <h5>ZipCode: {houses.zip}</h5>
                            <button onClick={this.props.deleteHouse} value={houses.id}>Delete</button>
                        </div>)
            })}
            </div>
        )
    }
}