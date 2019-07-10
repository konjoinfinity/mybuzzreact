import React, { Component } from 'react';

class Signup extends Component {
    render() {
        let errormessage;
        this.props.error &&
            (errormessage = (
                <button className="btn btn-warning"> {this.props.error}</button>
            ));
        return (
            this.props.isLoggedIn === false && (
                <div className="row">
                    <div className="col s12 m6" style={{ margin: "10px" }}>
                        <h4 style={{ textAlign: "center" }}>Sign Up</h4>
                        {errormessage}
                        <div className="card">
                            <div className="input-field col s12">
                                <form>
                                    <input type="email" name="username" id="username" placeholder="Email" />
                                    <div className="input-field col s12">
                                        <select id="gender_select">
                                            <option value="" disabled selected>Choose Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <input type="hidden" name="gender" id="gender" />
                                    <div className="input-field col s12">
                                        Select Weight
                                <input type="number" name="weight" min="80" max="400" step="5" value="100" />
                                    </div>
                                    <div className="input-field col s12">
                                        <input type="password" name="password" id="password" placeholder="Password" />
                                        <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" />
                                    </div>
                                    <div className="input-field col s12" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                        <button type="submit" class="btn waves-effect waves-light teal darken-1">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        );
    }
}

export default Signup;