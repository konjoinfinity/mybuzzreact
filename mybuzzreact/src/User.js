import React, { Component } from "react";
import axios from "axios";
import './App.css';
import devProdUrl from "./Urls"
import Timestamp from "react-timestamp"
import _ from "underscore"

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        };
        this.getUser = this.getUser.bind(this);
        this.addDrink = this.addDrink.bind(this);
        this.checkBac = this.checkBac.bind(this);
        this.deleteBuzz = this.deleteBuzz.bind(this);
        this.deleteOldBuzz = this.deleteOldBuzz.bind(this);
        this.deleteAllBuzzes = this.deleteAllBuzzes.bind(this);
        this.deleteAllOldBuzzes = this.deleteAllOldBuzzes.bind(this);
    }

    componentDidMount() {
        axios.get(devProdUrl, {
            headers: { "user-token": `${localStorage.token}` }
        }).then(res => {
            this.setState({ user: res.data })
        }).catch(err => console.log(err));
    }

    getUser() {
        axios.get(devProdUrl, {
            headers: { "user-token": `${localStorage.token}` }
        })
            .then(res => {
                this.setState({ user: res.data })
            }).catch(err => console.log(err));
    }

    addDrink(drink) {
        axios.post(devProdUrl, {
            drinkType: drink
        }, {
                headers: { "user-token": `${localStorage.token}` }
            }).then(res => {
                this.setState({ user: res.data })
            }).catch(err => console.log(err));
    }

    checkBac() {
        axios.get(devProdUrl + "bac", {
            headers: { "user-token": `${localStorage.token}` }
        })
            .then(res => {
                this.setState({ user: res.data })
            }).catch(err => console.log(err));
    }

    deleteBuzz(buzzid) {
        axios.put(devProdUrl + "delete", {
            index: buzzid
        }, {
                headers: { "user-token": `${localStorage.token}` }
            }).then(res => {
                this.setState({ user: res.data })
                this.getUser();
            }).catch(err => console.log(err));
        this.props.history.push("/");
    }

    deleteOldBuzz(buzzid) {
        axios.put(devProdUrl + "olddelete", {
            index: buzzid
        }, {
                headers: { "user-token": `${localStorage.token}` }
            }).then(res => {
                this.setState({ user: res.data })
                this.getUser();
            }).catch(err => console.log(err));
        this.props.history.push("/");
    }

    deleteAllBuzzes() {
        axios.put(devProdUrl + "alldelete", {}, {
            headers: { "user-token": `${localStorage.token}` }
        }).then(res => {
            this.setState({ user: res.data })
            this.getUser();
        }).catch(err => console.log(err));
        this.props.history.push("/");
    }

    deleteAllOldBuzzes() {
        axios.put(devProdUrl + "removeoldall", {}, {
            headers: { "user-token": `${localStorage.token}` }
        }).then(res => {
            this.setState({ user: res.data })
            this.getUser();
        }).catch(err => console.log(err));
        this.props.history.push("/");
    }

    render() {
        let buzzes;
        this.state.user.buzzes &&
            (buzzes = this.state.user.buzzes.map((buzz, id) => {
                return (
                    <div className="divcard teal lighten-5" key={id}>
                        <h6 style={{ fontWeight: "bold" }}>{buzz.numberOfDrinks} - {buzz.drinkType}</h6>
                        {buzz.drinkType === "Beer" &&
                            <h5 style={{ fontWeight: "bold" }}><span role="img" aria-label="beer">🍺</span></h5>}
                        {buzz.drinkType === "Wine" &&
                            <h5 style={{ fontWeight: "bold" }}><span role="img" aria-label="wine">🍷</span></h5>}
                        {buzz.drinkType === "Liquor" &&
                            <h5 style={{ fontWeight: "bold" }}><span role="img" aria-label="liquor">🥃</span></h5>}
                        <p style={{
                            maxWidth: "170px",
                            wordWrap: "break-word"
                        }}><Timestamp date={buzz.dateCreated} options={{ includeDay: true, twentyFourHour: true }} /></p>
                        <button className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.deleteBuzz(buzz._id)}>Delete<i className="material-icons right">delete</i></button>
                    </div>
                )
            }
            )
            )
        let oldbuzzes;
        this.state.user.oldbuzzes &&
            (oldbuzzes = this.state.user.oldbuzzes.map((oldbuzz, id) => {
                return (
                    <div className="divcard teal lighten-5" key={id}>
                        <h6 style={{ fontWeight: "bold" }}>{oldbuzz.numberOfDrinks} - {oldbuzz.drinkType}</h6>
                        {oldbuzz.drinkType === "Beer" &&
                            <h5 style={{ fontWeight: "bold" }}><span role="img" aria-label="beer">🍺</span></h5>}
                        {oldbuzz.drinkType === "Wine" &&
                            <h5 style={{ fontWeight: "bold" }}><span role="img" aria-label="wine">🍷</span></h5>}
                        {oldbuzz.drinkType === "Liquor" &&
                            <h5 style={{ fontWeight: "bold" }}><span role="img" aria-label="liquor">🥃</span></h5>}
                        <p style={{
                            maxWidth: "170px",
                            wordWrap: "break-word"
                        }}><Timestamp date={oldbuzz.dateCreated} options={{ includeDay: true, twentyFourHour: true }} /></p>
                        <button className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.deleteOldBuzz(oldbuzz._id)}>Delete<i className="material-icons right">delete</i></button>
                    </div>
                )
            }
            )
            )
        return (
            <div style={this.state.user.bac >= 0.05 && this.state.user.bac < 0.06 ? { background: "teal" } : null}>
                <div className="container-card">
                    <div className="divcard teal lighten-5">
                        <h6>{this.state.user.username}</h6>
                        <p>Gender - {this.state.user.gender}</p>
                        <p>Weight - {this.state.user.weight} lbs.</p>
                        <h5>Current BAC</h5>
                        {(this.state.user.bac === 0 || this.state.user.bac === undefined) && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "white", color: "teal" }}>
                                <h6 style={{ fontWeight: "bold" }}>0.0</h6>
                            </div>)}
                        {this.state.user.bac > 0.00 && this.state.user.bac < 0.01 && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#b5d3a0", color: "white" }}>
                                <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                            </div>)}
                        {this.state.user.bac > 0.01 && this.state.user.bac < 0.02 && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#96c060", color: "white" }}>
                                <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                            </div>)}
                        {this.state.user.bac > 0.02 && this.state.user.bac < 0.03 && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#9fc635", color: "white" }}>
                                <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                            </div>)}
                        {this.state.user.bac >= 0.03 && this.state.user.bac < 0.04 && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#d3e50e", color: "teal" }}>
                                <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                            </div>)}
                        {this.state.user.bac >= 0.04 && this.state.user.bac < 0.05 && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#ffeb00", color: "teal" }}>
                                <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                            </div>)}
                        {this.state.user.bac >= 0.05 && this.state.user.bac < 0.06 && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#f9bf00", color: "teal" }}>
                                <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                            </div>)}
                        {this.state.user.bac >= 0.06 && this.state.user.bac < 0.07 && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#e98f00", color: "white" }}>
                                <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                            </div>)}
                        {this.state.user.bac >= 0.07 && this.state.user.bac < 0.08 && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#d05900", color: "white" }}>
                                <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                            </div>)}
                        {this.state.user.bac >= 0.08 && (
                            <div style={{ borderRadius: "15px", border: "solid teal 2px", padding: "10px", background: "#AE0000", color: "white" }}>
                                <h6 style={{ fontWeight: "bold" }}>{this.state.user.bac}</h6>
                            </div>)}
                        {this.state.user.bac >= 0.05 && this.state.user.bac < 0.06 && (
                            <div><h6><span role="img" aria-label="optbuzzhand">👌🏻</span> Optimal Buzz! <span role="img" aria-label="optbuzzicon">😊</span></h6></div>)}
                        <button style={{ margin: "5px" }} onClick={() => this.checkBac()} className="btn waves-effect waves-light teal darken-1" type="submit" name="BAC">Calculate BAC<i className="material-icons right">send</i></button>
                    </div>
                    <div className="divcard teal lighten-5">
                        <h5>Add a Drink</h5>
                        <button style={{ margin: "5px" }} className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.addDrink("Beer")}>+1 Beer<i className="fas fa-beer right"></i></button>
                        <button style={{ margin: "5px" }} className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.addDrink("Wine")}>+1 Wine<i className="fas fa-wine-glass-alt right"></i></button>
                        <button style={{ margin: "5px" }} className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.addDrink("Liquor")}>+1 Liquor<i className="fas fa-glass-whiskey right"></i></button>
                    </div>
                </div>
                {this.state.user.buzzes && this.state.user.buzzes.length > 0 && (
                    <div className="divcard teal lighten-4">
                        <h5>Current Buzz &nbsp;<i className="fas fa-beer"></i> &nbsp;<i className="fas fa-wine-glass-alt"></i> &nbsp;<i className="fas fa-glass-whiskey"></i></h5>
                        <button className="btn waves-effect waves-light teal darken-1" onClick={() => this.deleteAllBuzzes()} type="submit">Delete All<i className="material-icons right">delete</i></button>
                    </div>)}
                {_.isEmpty(this.state.user.buzzes) && this.state.user.timeSince && (
                    <div className="divcard teal lighten-4">
                        <h5 style={{ textAlign: "center" }}>Current Buzz</h5>
                        <h6>Congrats, keep up</h6>
                        <h6>the good work!</h6>
                        <h6>It's been:</h6>
                        <h6 style={{ fontWeight: "bold" }}>{this.state.user.timeSince}</h6>
                        <h6>since your last drink.</h6>
                    </div>)}
                {_.isEmpty(this.state.user.buzzes) && !this.state.user.timeSince && (
                    <div className="divcard teal lighten-4">
                        <h5 style={{ textAlign: "center" }}>Current Buzz</h5>
                        <h6>Congrats, keep up</h6>
                        <h6>the good work!</h6>
                        <h6 style={{ fontWeight: "bold" }}>You haven't had</h6>
                        <h6 style={{ fontWeight: "bold" }}>any drinks.</h6>
                    </div>)}
                <div className="container-card">
                    {buzzes}
                </div>
                {this.state.user.oldbuzzes && this.state.user.oldbuzzes.length > 0 && (
                    <div className="divcard teal lighten-4">
                        <h5 style={{ textAlign: "center" }}>Old Buzzes &nbsp;<i className="fas fa-beer"></i> &nbsp;<i className="fas fa-wine-glass-alt"></i> &nbsp;<i className="fas fa-glass-whiskey"></i></h5>
                        <button className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.deleteAllOldBuzzes()}>Delete All<i className="material-icons right">delete</i></button>
                    </div>)}
                <div className="container-card">
                    {oldbuzzes}
                </div>
            </div>
        )
    }
}

export default User;