import React from 'react';
import { browserHistory } from 'react-router';

export class Signup extends React.Component {
    gotoLanding = () => {
        browserHistory.push('/landing');
    }
    render() {
        return (
            <div>
                im a Signup page
                <button type="button" onClick={this.gotoLanding}>Goto landing</button>
            </div>
        );
    }
}