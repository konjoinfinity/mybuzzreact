import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container-card">
                <div className="card teal lighten-5" style={{ margin: "20px", padding: "10px" }}>
                    <div className="card-content white-black center">
                        <h4>About</h4>
                        <p style={{ padding: "10px" }}>Buzzin' is an app designed to help people track, visualize, reduce, and manage their alcoholic consumption habits.</p>
                        <p style={{ padding: "10px" }}>Designed and engineered by Wesley Scholl and Charles Blundon.</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default About;