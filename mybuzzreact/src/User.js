import React, { Component } from "react";
import axios from "axios";
import './App.css';
import devProdUrl from "./Urls"
import Timestamp from "react-timestamp"

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
        axios.get(devProdUrl + `user/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ user: res.data })
            }).catch(err => console.log(err));
    }

    getUser() {
        axios.get(devProdUrl + `user/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ user: res.data })
            }).catch(err => console.log(err));
    }

    addDrink(drink) {
        axios.post(devProdUrl + `user/${this.props.match.params.id}`, {
            drinkType: drink
        }).then(res => {
            this.setState({ user: res.data })
        }).catch(err => console.log(err));
    }

    checkBac() {
        axios.get(devProdUrl + `user/${this.props.match.params.id}/bac`)
            .then(res => {
                this.setState({ user: res.data })
            }).catch(err => console.log(err));
    }

    deleteBuzz(buzzid) {
        axios.put(devProdUrl + `user/${this.props.match.params.id}/del`, {
            index: buzzid
        }).then(res => {
            this.setState({ user: res.data })
            this.getUser();
        }).catch(err => console.log(err));
        this.props.history.push(`/user/${this.props.match.params.id}`);
    }

    deleteOldBuzz(buzzid) {
        axios.put(devProdUrl + `user/${this.props.match.params.id}/olddel`, {
            index: buzzid
        }).then(res => {
            this.setState({ user: res.data })
            this.getUser();
        }).catch(err => console.log(err));
        this.props.history.push(`/user/${this.props.match.params.id}`);
    }

    deleteAllBuzzes() {
        axios.put(devProdUrl + `user/${this.props.match.params.id}/delall`).then(res => {
            this.setState({ user: res.data })
            this.getUser();
        }).catch(err => console.log(err));
        this.props.history.push(`/user/${this.props.match.params.id}`);
    }

    deleteAllOldBuzzes() {
        axios.put(devProdUrl + `user/${this.props.match.params.id}/olddelall`).then(res => {
            this.setState({ user: res.data })
            this.getUser();
        }).catch(err => console.log(err));
        this.props.history.push(`/user/${this.props.match.params.id}`);
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
            <div>
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
                {this.state.buzzes !== "" &&
                    <div className="divcard teal lighten-4">
                        <h5>Current Buzz &nbsp;<i className="fas fa-beer"></i> &nbsp;<i className="fas fa-wine-glass-alt"></i> &nbsp;<i className="fas fa-glass-whiskey"></i></h5>
                        <button className="btn waves-effect waves-light teal darken-1" onClick={() => this.deleteAllBuzzes()} type="submit">Delete All<i className="material-icons right">delete</i></button>
                    </div>}
                {this.state.buzzes === "" && (
                    this.state.timeSince !== "" &&
                    <div className="divcard teal lighten-4">
                        <h5 style={{ textAlign: "center" }}>Current Buzz</h5>
                        <h6>Congrats, keep up</h6>
                        <h6>the good work!</h6>
                        <h6>It's been:</h6>
                        <h6 style={{ fontWeight: "bold" }}>{this.state.user.timeSince}</h6>
                        <h6>since your last drink.</h6>
                    </div>)}
                {this.state.buzzes === "" && (
                    this.state.timeSince !== "" &&
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
                {this.state.user.buzzes &&
                    <div className="divcard teal lighten-4">
                        <h5 style={{ textAlign: "center" }}>Old Buzzes &nbsp;<i className="fas fa-beer"></i> &nbsp;<i className="fas fa-wine-glass-alt"></i> &nbsp;<i className="fas fa-glass-whiskey"></i></h5>
                        <button className="btn waves-effect waves-light teal darken-1" type="submit" onClick={() => this.deleteAllOldBuzzes()}>Delete All<i className="material-icons right">delete</i></button>
                    </div>}
                <div className="container-card">
                    {oldbuzzes}
                </div>
            </div>
        )
    }
}

export default User;