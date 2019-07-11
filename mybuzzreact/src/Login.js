import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m6" style={{ margin: "10px" }}>
                    <h4 style={{ textAlign: "center" }}>Log In</h4>
                    <div className="card">
                        <div className="input-field col s12">
                            <form>
                                <div>
                                    <p>Email</p>
                                    <p>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={this.props.handleInput} />
                                    </p>
                                </div>
                                <div>
                                    <p>Password</p>
                                    <p>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={this.props.handleInput} />
                                    </p>
                                </div>
                                <div className="input-field col s12" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    <button
                                        className="btn waves-effect waves-light teal darken-1"
                                        type="submit"
                                        onClick={this.props.handleLogIn}>Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Login;