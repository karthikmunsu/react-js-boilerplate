import React from 'react';
import { browserHistory } from 'react-router';

export class Landing extends React.Component {
    goBackk = () => {
        browserHistory.goBack();
    }
    render() {
        return (
            <div>
                im a Landing page <br/>
                username: {this.props.params.user_name}
                <button type="button" onClick={this.goBackk}>Go Back</button>
            </div>
        );
    }
}