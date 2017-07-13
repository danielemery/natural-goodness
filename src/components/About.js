import React, { Component } from 'react';
import { CardDeck, Card, CardText, CardBlock, CardTitle} from 'reactstrap';

class About extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <CardBlock>
                            <CardTitle>Mission</CardTitle>
                            <CardText>Natural Goodness Co-op is a place where people can access cheaper food products for their families, the focus is on organic products.</CardText>
                        </CardBlock>
                    </Card>
                    <Card>
                        <CardBlock>
                            <CardTitle>Now</CardTitle>
                            <CardText>Orders are currently handled by sending out an email with an excel order form to each participant, they fill it out and return it completed. These spreadsheets are then collated and fill requests are sent on the facebook group page.</CardText>
                        </CardBlock>
                    </Card>
                    <Card>
                        <CardBlock>
                            <CardTitle>Future</CardTitle>
                            <CardText>This website aims to provide an application that greatly streamlines the process and provides better visibility of order quantities to all participants.</CardText>
                        </CardBlock>
                    </Card>
                    <Card>
                        <CardBlock>
                            <CardTitle>Contribute</CardTitle>
                            <CardText>The application is being developed as an open source project, if you wish to help contribute please request at the <a href="https://github.com/danielemery/natural-goodness" target="_blank" rel="noopener noreferrer">GitHub Repository</a>.</CardText>
                        </CardBlock>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

export default About;
