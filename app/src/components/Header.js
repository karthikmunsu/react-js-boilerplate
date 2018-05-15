import React from 'react';
import './Header.css';
import { Link } from 'react-router'; 
export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="#default" className="logo">CompanyLogo</a>
                <div className="header-right">
                    <Link to={"/home"} activeStyle={{backgroundColor: 'purple', color: 'white'}}>Home</Link>
                    <Link to={"/login"} activeStyle={{backgroundColor: 'purple', color: 'white'}}>Login</Link>
                    <Link to={"/signup"} activeStyle={{backgroundColor: 'purple', color: 'white'}}>Signup</Link>
                </div>
                </div>
        );
    }
}