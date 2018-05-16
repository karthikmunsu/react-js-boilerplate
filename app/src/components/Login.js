import React from 'react';
import History from './History';

export class Login extends React.Component {
    gotoLanding = () => {
        History.push('/landing');
    }
    render() {
        return (
            <div>
                im Login.
                <button type="Button" onClick={this.gotoLanding}>Goto Landing </button>
            </div>
        );
    }
}