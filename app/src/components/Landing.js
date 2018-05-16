import React from 'react';
import History from './History';

export class Landing extends React.Component {
    goPrevious = () => {
        History.goBack();
    }
    render() {
        return (
            <div>
                im Landing.
                <button type="button" onClick={this.goPrevious}>Go Back</button>
            </div>
        );
    }
}