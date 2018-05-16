import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/signup"}>Signup</Link>
                    </li>
                    <li>
                        <Link to={"/landing"}>Landing</Link>
                    </li>
                </ul>
            </div>
        );
    }
}