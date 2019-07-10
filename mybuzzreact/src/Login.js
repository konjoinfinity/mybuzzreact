import React, { Component } from 'react';

class Login extends Component {
    render() {
        let errormessage;
        this.props.error &&
            (errormessage = (
                <button className="btn btn-warning"> {this.props.error}</button>
            ));
        return (
            this.props.isLoggedIn === false && (
                <div className="card m-5">
                    <div className="card-body">
                        <div className="card-content">
                            <h2>Log In</h2>
                            {errormessage}
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
                                <button
                                    className="btn waves-effect waves-light teal darken-1"
                                    type="submit"
                                    onClick={this.props.handleLogIn}>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        );
    }
}

export default Login;