import React, { Component } from "react";
import axios from "axios";
import './App.css';
import devProdUrl from "./Urls"
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ""
        };
    }

    componentDidMount() {
        axios
            .get(devProdUrl)
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        let userlist;
        console.log(this.state.users)
        this.state.users !== "" && (
            userlist = this.state.users.map((user, id) => {
                return (
                    <div className="card" key={id}>
                        <div className="card-body">
                            <div className="card-content">
                                <h4>{user.username} - {user.gender}</h4>
                                <h6><Link to={"/user/" + user._id}>Show</Link></h6>
                            </div>
                        </div>
                    </div>
                );
            }))
        return (
            <div>{userlist}</div>
        )
    }
}

export default Home;
