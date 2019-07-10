import React, { Component } from 'react';

class Signup extends Component {
    render() {
        let errormessage;
        this.props.error &&
            (errormessage = (
                <button className="btn yellow lighten-4"> {this.props.error}</button>
            ));
        return (
            <div className="row">
                <h4 style={{ textAlign: "center" }}>Sign Up</h4>
                {errormessage}
                <div className="col s12 m6" style={{ margin: "10px" }}>
                    <div className="card">
                        <div className="input-field col s12">
                            <form>
                                <div className="input-field col s12">
                                    <input type="email" name="username" id="username" placeholder="Email" onChange={this.props.handleInput} />
                                </div>
                                <div className="input-field col s12">
                                    <select id="gender_select">
                                        <option defaultValue="Choose Gender" disabled>Choose Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <input type="hidden" name="gender" id="gender" onChange={this.props.handleInput} />
                                <div className="input-field col s12">
                                    Select Weight
                                <input type="number" name="weight" min="80" max="400" step="5" value="100" onChange={this.props.handleInput} />
                                </div>
                                <div className="input-field col s12">
                                    <input type="password" name="password" id="password" placeholder="Password" onChange={this.props.handleInput} />
                                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" onChange={this.props.handleInput} />
                                </div>
                                <div className="input-field col s12" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    <button type="submit" className="btn waves-effect waves-light teal darken-1" onClick={this.props.handleSignUp}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;