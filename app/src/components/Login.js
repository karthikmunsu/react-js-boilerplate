import React, { props } from 'react';
import { Header } from './Header';
import './Login.css';
import logo from './images/logo.png';
import { browserHistory } from 'react-router';

export class Login extends React.Component {
    constructor() {
        super(props);
        this.login = this.login.bind(this);
    }

    login = (uname, pwd) => {
        // fetch('http://localhost:9009/login?username='+ uname +'&pwd=' + pwd)
        //     .then(function(res){
        //         return res.json();
        //     }).then(function(res) {
        //         if(res.msg !== 'username or pwd is incorrect.')
        //             browserHistory.push('landing');
        //         else
        //             alert('username or pwd is incorrect!');
        //     });
        browserHistory.push('landing/Hi_React_User');
    }

    render() {
        return (
            <div>
                <Header/>
                <form >
                    <div className="imgcontainer">
                        <img src={logo} alt="Avatar" className="avatar"/>
                    </div>
                    <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" id="uname" required/>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" id="pwd" required/>
                            
                        <button type="button" onClick={() => this.login(document.getElementById('uname').value, document.getElementById('pwd').value)}>Login</button>
                        <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                        </label>
                    </div>
                    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        );
    }
}