import React, { props } from 'react';
import { Header } from './Header';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                show me 
                {this.props.children}
            </div>
        );
    }
}