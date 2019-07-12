import React, { Component } from 'react';
import FlashMessage from 'react-flash-message'

class Signup extends Component {
    render() {
        if (this.props.error) {
            var error = (
                <FlashMessage duration={5000} persistOnHover={true}>
                    <div style={{ background: "#f9bf00", borderRadius: "15px", textAlign: "center" }}>{this.props.error}</div>
                </FlashMessage>)
        }
        return (
            <div className="row">
                <div className="col s12 m6" style={{ margin: "10px" }}>
                    <h4 style={{ textAlign: "center" }}>Sign Up</h4>
                    {error}
                    <div className="card">
                        <div className="input-field col s12">
                            <form>
                                <div className="input-field col s12">
                                    <input type="email" name="email" placeholder="Email" onChange={this.props.handleInput} />
                                </div>
                                <div className="input-field col s12">
                                    <select name="gender" className="browser-default" onChange={this.props.handleInput}>
                                        <option defaultValue="">Choose Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="input-field col s12">
                                    Enter Weight
                                <input type="number" name="weight" placeholder="100" onChange={this.props.handleInput} />
                                </div>
                                <div className="input-field col s12">
                                    <input type="password" name="password" id="password" placeholder="Password" onChange={this.props.handleInput} />
                                </div>
                                <div className="input-field col s12">
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