import React, { props } from 'react';
import {Header} from './Header';
import './Login.css';
import logo from './images/logo.png';
import { browserHistory } from 'react-router';

export class Signup extends React.Component {
    constructor() {
        super(props);
        this.signup = this.signup.bind(this);
    }

    signup = (uname, pwd, cpwd) => {
        //make your own api calls here
        // if(pwd === cpwd) {
        //     fetch('http://localhost:9009/register?username='+ uname +'&pwd=' + pwd)
        //     .then(function(res){
        //         return res.json();
        //     }).then(function(res) {
        //         if(res.msg !== 'username or pwd is incorrect.')
        //             browserHistory.push('login');
        //         else
        //             alert('username or pwd is incorrect!');
        //     });
        // }else
        //     alert('password and confirm pwd doesnt match.');
    }

    render() {
        return (
            <div>
                <Header/>
                 <form >
                    <div className="imgcontainer">
                        <img src={logo} style={{height:""}} alt="Avatar" className="avatar"/>
                    </div>

                    <div className="container">
                        <label ><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" id="uname" required/>

                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" id="pwd" required/>

                        <label ><b>Cnf Password</b></label>
                        <input type="password" placeholder="Cnf Password" name="cnf_psw" id="cnfpwd" required/>
                            
                        <button type="button" onClick={() => this.signup(document.getElementById('uname').value, document.getElementById('pwd').value, document.getElementById('cnfpwd').value)}>Signup</button>
                    </div>

                    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
                        <button type="button" className="cancelbtn">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}