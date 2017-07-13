import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Coming Soon</h1>
                    <p className="lead">A new way of managing the Natural Goodness Co-Op orders is currently in development. This will vastly simplify making your co-op order and increase visibility of filling orders etc.</p>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;
