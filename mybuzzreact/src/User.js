import React, { Component } from "react";
import axios from "axios";
import './App.css';
import devProdUrl from "./Urls"

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        };
    }

    componentDidMount() {
        axios
            .get(devProdUrl + `user/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ user: res.data });
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    addDrink(drink) {
        console.log("Add 1: " + drink)
    }

    checkBac() {
        console.log("Check current BAC")
    }

    render() {
        return (
            <div className="container-card">
                <div className="divcard teal lighten-5">
                    <h6>{this.state.user.username}</h6>
                    <p>Gender - {this.state.user.gender}</p>
                    <p>Weight - {this.state.user.weight} lbs.</p>
                    <h5>Current BAC</h5>
                    {this.state.user.bac ?
                        <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "white", color: "teal" }}>
                            <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                        </div>
                        :
                        <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "white", color: "teal" }}>
                            <h6 style={{ fontWeight: "bold" }}>0.0</h6>
                        </div>}
                    <button style={{ margin: "5px" }} onClick={() => this.checkBac()} className="btn waves-effect waves-light teal darken-1" type="submit" name="BAC">Calculate BAC<i className="material-icons right">send</i></button>
                </div>
                <div className="divcard teal lighten-5">
                    <h5>Add a Drink</h5>
                    <button style={{ margin: "5px" }} className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.addDrink("Beer")}>+1 Beer<i className="fas fa-beer right"></i></button>
                    <button style={{ margin: "5px" }} className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.addDrink("Wine")}>+1 Wine<i className="fas fa-wine-glass-alt right"></i></button>
                    <button style={{ margin: "5px" }} className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.addDrink("Liquor")}>+1 Liquor<i className="fas fa-glass-whiskey right"></i></button>
                </div>
            </div>
        )
    }
}

export default User;