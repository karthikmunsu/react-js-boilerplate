import React, { props } from 'react';
import { Header } from './Header';

export class Landing extends React.Component {
    constructor() {
        super(props);
    }
    render() {
        return (
                <div>
                    <Header/>
                    welcome to REACT for Geeks.<br/>
                    Username: <span style={{color:'Red'}}><b>{this.props.params.id}</b></span>
                </div>
        );
    }
}