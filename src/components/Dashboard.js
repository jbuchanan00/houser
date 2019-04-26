import React, {Component} from "react"
import House from "./House"
import {Link} from "react-router-dom"
import Axios from "axios";

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this)
    }
    
    componentDidMount(){
        this.getHouses()
    }

    deleteHouse = (e) => {
        const id = e.target.value
        Axios.delete(`/api/delete/${id}`).then(res => {
            this.getHouses()
        })
    }

    getHouses(){
        Axios.get("/api/houses").then((res) => {
            this.setState({
                houses: res.data
            })
            console.log(this.state.houses)
        }).catch(err => console.log(err))
    }
    
    render(){
        console.log(this.state.houses)
        return(
            <div>
                
                <Link to="/wizard">
                <button>Add New Property</button>
                </Link>
                <House houses={this.state.houses} deleteHouse={this.deleteHouse}/>
            </div>
        )
    }
}