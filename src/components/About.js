import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="inner-cover">
                <h1 className="cover-heading">About</h1>
                <p>Natural Goodness Co-op is a place where people can access cheaper food products for their families, the focus is on organic products.</p>
                <p>Orders are currently handled by sending out an email with an excel order form to each participant, they fill it out and return it completed. These spreadsheets are then collated and fill requests are sent on the facebook group page.</p>
                <p>This website aims to provide an application that greatly streamlines the process and provides better visibility of order quantities to all participants</p>
                <p>The application is being developed as an open source project, if you wish to help contribute please request at the <a href="https://github.com/danielemery/natural-goodness" target="_blank">GitHub Repository</a></p>
            </div>
        );
    }
}

export default About;