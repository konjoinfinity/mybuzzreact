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
                    {this.state.user.bac >= 0.04 && this.state.user.bac < 0.06 && (
                        <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "yellow", color: "teal" }}>
                            <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                        </div>)}
                    {this.state.user.bac >= 0.06 && this.state.user.bac < 0.08 && (
                        <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "orange", color: "teal" }}>
                            <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                        </div>)}
                    {this.state.user.bac >= 0.08 && (
                        <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#AE0000", color: "white" }}>
                            <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                        </div>)}
                    {this.state.user.bac >= 0.02 && this.state.user.bac < 0.04 && (
                        <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#2DB900", color: "white" }}>
                            <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                        </div>)}
                    {this.state.user.bac > 0.00 && this.state.user.bac < 0.02 && (
                        <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "white", color: "teal" }}>
                            <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                        </div>)}
                    {this.state.user.bac === 0 && (
                        <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "white", color: "teal" }}>
                            <h6 style={{ fontWeight: "bold" }}>0.0</h6>
                        </div>)}
                    <button style={{ margin: "5px" }} onClick={() => this.checkBac()} className="btn waves-effect waves-light teal darken-1" type="submit" name="BAC">Calculate BAC<i className="material-icons right">send</i></button>
                </div>
                <div className="divcard teal lighten-5">
                    <h5>Add a Drink</h5>
                    <button style={{ margin: "5px" }} className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.addDrink("Beer")}>+1 Beer<i className="fas fa-beer right"></i></button>
                    <button style={{ margin: "5px" }} className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.addDrink("Wine")}>+1 Wine<i className="fas fa-wine-glass-alt right"></i></button>
                    <button style={{ margin: "5px" }} className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.addDrink("Liquor")}>+1 Liquor<i className="fas fa-glass-whiskey right"></i></button>
                </div>
            </div>

            // {{#if user.buzzes}}
            // <div class="divcard teal lighten-4">
            //   <h5>Current Buzz &nbsp;<i class="fas fa-beer"></i> &nbsp;<i class="fas fa-wine-glass-alt"></i> &nbsp;<i class="fas fa-glass-whiskey"></i></h5>
            //   <form action="/user/{{@root.user.id}}/delall?_method=PUT" method="post">
            //     <button class="btn waves-effect waves-light teal darken-1" type="submit" name="index" value="{{id}}">Delete All<i class="material-icons right">delete</i></button>
            //   </form>
            //   </div>
            //   {{/if}}
            //         <div class="container-card">
            // {{#if user.buzzes}}
            // {{#each user.buzzes}}
            //       <div class=" divcard teal lighten-5">
            //           <h6 style="font-weight: bold">{{numberOfDrinks}} - {{drinkType}}</h6>
            //       <p style="max-width:170px;
            // word-wrap:break-word">{{dateCreated}}</p>
            // <br>
            // <form action="/user/{{@root.user.id}}/del?_method=PUT" method="post">
            // <button class="btn waves-effect waves-light teal darken-1" type="submit" name="index" value="{{id}}">Delete<i class="material-icons right">delete</i></button>
            // </form>
            // </div>
            //       {{/each}}
            //       </div>
            //       {{else}}
            //       <div class="divcard teal lighten-4">
            //         <h5 style="text-align: center">Current Buzz</h5>
            //         <br>
            //       <h6>Congrats, keep up</h6>
            //       <h6>the good work!</h6>
            //       <br>
            //       {{#if user.timeSince}}
            //         <h6>It's been:
            //         <h6 style="font-weight: bold">{{user.timeSince}}</h6>
            //         <h6>since your last drink.</h6>
            //         {{else}}
            //         <h6 style="font-weight: bold">You haven't had</h6>
            //         <h6 style="font-weight: bold">any drinks.</h6>
            //         {{/if}}
            //       </div>
            //         {{/if}}
            //         <br>
            //         {{#if user.oldbuzzes}}
            //         <div class="divcard teal lighten-4">
            //       <h5 style="text-align: center">Historical Buzzes &nbsp;<i class="fas fa-beer"></i> &nbsp;<i class="fas fa-wine-glass-alt"></i> &nbsp;<i class="fas fa-glass-whiskey"></i></h5>
            //       <form action="/user/{{@root.user.id}}/olddelall?_method=PUT" method="post">
            //         <button class="btn waves-effect waves-light teal darken-1" type="submit" name="index" value="{{id}}">Delete All<i class="material-icons right">delete</i></button>
            //       </form>
            //     </div>
            //     <div class="container-card">
            //       {{#each user.oldbuzzes}}
            //             <div class="divcard teal lighten-5">
            //         <h6 style="font-weight: bold">{{numberOfDrinks}} - {{drinkType}}</h6>
            //         <br>
            //     <p style="max-width:170px;
            // word-wrap:break-word">{{dateCreated}}</p>
            // <br>
            //     <form action="/user/{{@root.user.id}}/olddel?_method=PUT" method="post">
            //       <button class="btn waves-effect waves-light teal darken-1" type="submit" name="index" value="{{id}}">Delete<i class="material-icons right">delete</i></button>
            //     </form>
            //     </div>
            //             {{/each}}
            //               {{/if}}
            //             </div>
        )
    }
}

export default User;