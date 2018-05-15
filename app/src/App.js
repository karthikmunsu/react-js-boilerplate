import React, { Component, props } from 'react';
import './App.css';

const arr = new Array();

var setHeight = {
    height: '444px'
};

class App extends Component {
    constructor() {
       super(props); 
       this.state = {screen: 0, left: 0, operator: '', result: [], showSci: false};
       this.insertNumber = this.insertNumber.bind(this); //binding the function for use.
       this.insertOperator = this.insertOperator.bind(this);
       this.calcResult = this.calcResult.bind(this);
       this.deleteNum = this.deleteNum.bind(this);
       this.theta = this.theta.bind(this);
       this.dispScientific = this.dispScientific.bind(this);
    }

    insertNumber = (a) => {
        if(this.state.screen === 'Error')
            this.setState({screen: 0});
        if(this.state.screen === 0)
            this.setState({screen: a});
        else
            this.setState({screen: (this.state.screen).toString() + a.toString()});
    }// inserting the numbers to the display.

    insertOperator = (op) => {
        if(this.state.left !== 0)
            this.setState({left: this.state.screen});
        try {
            var str = (this.state.screen).length === undefined ? this.state.screen : (this.state.screen).charAt((this.state.screen).length - 1);
            var operators = ['+', '-', 'x', '/', '%'];
            var matched = false;
            var len = operators.length;
            for(var i = 0; i < len; i++) {
                if(operators[i] === str) {
                    matched = true;
                    break;
                }
            }
            if(matched)
                this.setState({screen: (this.state.screen).toString().split(str)[0] + op.toString()});
            else    
                this.setState({screen: (this.state.screen).toString() + op.toString()});
            this.setState({operator: op});
        }catch(e) {
            console.log(e);
        }
    }// inserting the operator

    calcResult = () => {
        var ch = (this.state.operator).charAt(0);
        var res = this.state.screen + ' = ';
        var right = '';
        switch(ch) {
            case '+':
                right = (this.state.screen).split('+');
                this.setState({screen: parseInt(right[0], 10) + parseInt(right[1], 10)});
                res += parseInt(right[0], 10) + parseInt(right[1], 10);
                arr.push(res);
                this.setState({result: arr});
                break;
            case '-':
                right = (this.state.screen).split('-');
                this.setState({screen: parseInt(right[0], 10) - parseInt(right[1], 10)});
                res +=  parseInt(right[0], 10) - parseInt(right[1], 10);
                arr.push(res);
                this.setState({result: arr});
                break;
            case 'x':
                right = (this.state.screen).split('x');
                this.setState({screen: parseInt(right[0], 10) * parseInt(right[1], 10)});
                res += parseInt(right[0], 10) * parseInt(right[1], 10);
                arr.push(res);
                this.setState({result: arr});
                break;
            case '/':
                right = (this.state.screen).split('/');
                this.setState({screen: parseInt(right[0], 10) / parseInt(right[1], 10)});
                res += parseInt(right[0], 10) / parseInt(right[1], 10);
                arr.push(res);
                this.setState({result: arr});
                break;
            case '%':
                right = (this.state.screen).split('%');
                this.setState({screen: parseInt(right[0], 10) % parseInt(right[1], 10)});
                res += parseInt(right[0], 10) % parseInt(right[1], 10);
                arr.push(res);
                this.setState({result: arr});
                break;
            default:
                this.setState({screen: 'Error'});
                break;
        }
    }//calculating the result.

    deleteNum = () => {
        var len = (this.state.screen).length === undefined ? 1 : (this.state.screen).length;
        var str = this.state.screen;
        var res = '';
        if(len === 1) 
            this.setState({screen: 0});
        else {
            for(var i = 0; i < len-1; i++) {
                res += str.charAt(i);
            }
            this.setState({screen: res});
        }
    }// deleting a value in the display

    theta = (data) => {
        switch(data) {
            case 'sin':
                this.setState({screen: Math.sin(this.state.screen *  Math.PI / 180)});
                break;
            case 'cos':
                this.setState({screen: Math.cos(this.state.screen *  Math.PI / 180)});
                break;
            case 'tan':
                this.setState({screen: Math.tan(this.state.screen *  Math.PI / 180)});
                break;
            default:
                this.setState({screen: 'Err'});
                break;
        }
    }//calculating the theta

    dispScientific = () => {
        if(this.state.showSci) {
            setHeight = {
                height: '444px'
            };
            this.setState({showSci: false});
        }
        else {
            setHeight = {
                height: '515px'
            }
            this.setState({showSci: true});
        }
    }// to show and hide the scientific calculator.

    render() {
        return (
            <div className = "App">
                <div id="background" style={setHeight} >            
        <div id="result">{this.state.screen}</div>      
         <div id="main">
             <div id="first-rows">
                 <button class="del-bg" id="delete" onClick={() => this.deleteNum()}>Del</button>
                 <button value="%" class="btn-style operator opera-bg fall-back" onClick={() => this.insertOperator('%')}>%</button>
                 <button value="+" class="btn-style opera-bg value align operator" onClick={() => this.insertOperator('+')}>+</button>
                 </div>
                 
               <div class="rows">
             <button value="7" class="btn-style num-bg num first-child" onClick={() => this.insertNumber(7)}>7</button>
                 <button value="8" class="btn-style num-bg num" onClick={() => this.insertNumber(8)}>8</button>
                 <button value="9" class="btn-style num-bg num" onClick={() => this.insertNumber(9)}>9</button>
                 <button value="-" class="btn-style opera-bg operator" onClick={() => this.insertOperator('-')}>-</button>
                 </div>
                 
                 <div class="rows">
                 <button value="4" class="btn-style num-bg num first-child" onClick={() => this.insertNumber(4)}>4</button>
                 <button value="5" class="btn-style num-bg num" onClick={() => this.insertNumber(5)}>5</button>
                 <button value="6" class="btn-style num-bg num" onClick={() => this.insertNumber(6)}>6</button>
                 <button value="*" class="btn-style opera-bg operator" onClick={() => this.insertOperator('x')}>x</button>
                 </div>
                 
                 <div class="rows">
                 <button value="1" class="btn-style num-bg num first-child" onClick={() => this.insertNumber(1)}>1</button>
                 <button value="2" class="btn-style num-bg num" onClick={() => this.insertNumber(2)}>2</button>
                 <button value="3" class="btn-style num-bg num" onClick={() => this.insertNumber(3)}>3</button>
                 <button value="/" class="btn-style opera-bg operator" onClick={() => this.insertOperator('/')}>/</button>
                 </div>
                 
                 <div class="rows">
                 <button value="0" class="num-bg zero" id="delete" onClick={() => this.insertNumber(0)}>0</button>
                 <button value="." class="btn-style num-bg period fall-back" onClick={() => this.insertOperator('.')}>.</button>
                 <button value="=" id="eqn-bg" class="eqn align" onClick={this.calcResult}>=</button>
                 </div>

                 <div class="rows">
                 <button class="num-bg zero" onClick={() => this.dispScientific()}>{this.state.showSci ? 'Hide' : 'Show'} Scientific Calculator</button>
                 </div>

                {this.state.showSci ? 
                 <div class="rows">
                 <button value="sin" class="btn-style num-bg num first-child" onClick={() => this.theta('sin')}>sin</button>
                 <button value="cos" class="btn-style num-bg num" onClick={() => this.theta('cos')}>cos</button>
                 <button value="tan" class="btn-style num-bg num" onClick={() => this.theta('tan')}>tan</button>
                 </div> : ''}

             </div>
         </div>
             {this.state.result.map(n => {return(<div><span>{n}</span></div>)})}
         </div>
        );
    }
}

export default App;