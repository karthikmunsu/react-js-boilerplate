import React from 'react';
import { browserHistory } from 'react-router';

export class Login extends React.Component {
    gotoLanding = () => {
        browserHistory.push('/landing/react_users');
    }
    render() {
        return (
            <div>
                im a Login page
                <button type="button" onClick={this.gotoLanding}>Goto Landing</button>
            </div>
        );
    }
}