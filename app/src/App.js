
import React, { Component, props } from 'react';
import logo from './logo.svg';
import './App.css';

var show = new Array(); //storing the previous calculated values.
var setHeight = {
  height: '456px'
}

class App extends Component {
  constructor() {
    super(props);
    this.state = {screen: 0, left: 0, right: 0, operator:'', result: [], dispSci: false };
    this.numFunc = this.numFunc.bind(this);
    this.opFunc = this.opFunc.bind(this);
    this.dispclr = this.dispclr.bind(this);
    this.eqFunction = this.eqFunction.bind(this);
    this.theta = this.theta.bind(this);
    this.test = this.test.bind(this);
  }
  
  test = () => {
    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
      if (orientation === "landscape-primary") {
        setHeight = {
          height: '456px',
          width: '526px'
        };
        this.setState({dispSci: true});
      } else if (orientation === "landscape-secondary") {
        console.log("Mmmh... the screen is upside down!");
      } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        console.log("Mmmh... you should rotate your device to landscape");
        setHeight = {
          height: '456px'
        };
        this.setState({dispSci: false});
      } else if (orientation === undefined) {
        console.log("The orientation API isn't supported in this browser :(");
      } //landscape
  }

  componentWillMount() { console.log('mounting testing the autopull');
    window.addEventListener('orientationchange', this.test);
    this.test();
  }

  numFunc = (num) => {
    if(this.state.screen === 0)
      this.setState({ screen: num });
    else  
      this.setState({ screen: (this.state.screen).toString() + num.toString() });
  }//to insert the number

  opFunc = (op) => {
    this.setState({operator: op});
    this.setState({screen: this.state.screen+op})
    var str = (this.state.screen).length === undefined ? this.state.screen : (this.state.screen).charAt((this.state.screen).length - 1);
    var operators = ['+', '-', '*', '/', '%'];
    var found = false;
    for(var i = 0; i < 5; i++) {
      if(str === operators[i]){
        found = true;
        break;
      }
    }
    try {
      if(found)
        this.setState({screen: (this.state.screen).split(str)[0] + op});
    }catch(e) {
      console.log(e);
    }
  }//operator function
 
  dispclr = () => {
    var len = (this.state.screen).length === undefined ? 1 : (this.state.screen).length;
    if(len === 1) 
      this.setState({screen: 0});
    else {
      var str = this.state.screen;
      var res = '';
      for(var i = 0; i < len-1; i++) {
        res += str.charAt(i);
      }
      this.setState({screen: res});
    }
  }//to clear the display using delete

  eqFunction = () => {
    var oper = (this.state.operator).charAt(0);
    var str  = (this.state.screen).split(oper);
    var res = this.state.screen + ' = ';
    console.log(res);
    switch(oper) {
      case '+':
        this.setState({screen: parseInt(str[0]) + parseInt(str[1])});
        res += parseInt(str[0]) + parseInt(str[1]);
        show.push(res);
        this.setState({ result: show});
        console.log(this.state.result);
        break;
      case '-':
        this.setState({screen: parseInt(str[0]) - parseInt(str[1])});
        res += parseInt(str[0]) - parseInt(str[1]);
        show.push(res);
        this.setState({ result: show});
        break;
      case '*':
        this.setState({screen: parseInt(str[0]) * parseInt(str[1])});
        res += parseInt(str[0]) * parseInt(str[1]);
        show.push(res);
        this.setState({ result: show});
        break;
      case '/':
        this.setState({screen: parseInt(str[0]) / parseInt(str[1])});
        res += parseInt(str[0]) / parseInt(str[1]);
        show.push(res);
        this.setState({ result: show});
         break;
      default:
        console.log('Error');
        break;
    }
  }// equals function

  theta = (t) => {
    console.log(this.state.screen);
    switch(t) {
        case 'sin':
            this.setState({screen: Math.sin(this.state.screen * Math.PI / 180)});
            break;
        case 'cos': 
            this.setState({screen: Math.cos(this.state.screen * Math.PI / 180)});
            break;
        case 'tan':
            this.setState({screen: Math.tan(this.state.screen * Math.PI / 180)});
            break;
        default:
            this.setState({screen: 'err'})
            break;
        }    
  }//calculating theta function
 
  dispSci = () => {
    if(this.state.dispSci) {
      this.setState({dispSci: false});
      setHeight = {
        height: '456px'
      }
    }
    else {
      this.setState({dispSci: true});
      setHeight = {
        height: '534px'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div id="calculator" style = {setHeight}>
      <div id="total"> {this.state.screen}
      </div>
        <div id="operators">
          <a onClick={() => this.opFunc('+')}>+</a>
          <a onClick={() => this.opFunc('-')}>-</a>
          <a onClick={() => this.opFunc('/')}>/</a>
          <a onClick={() => this.opFunc('*')}>*</a>
          <a onClick={() => this.eqFunction()}>=</a>
        </div>
        <div id="numbers">
          <a onClick={() => this.numFunc(1)}>1</a>
          <a onClick={() => this.numFunc(2)}>2</a>
          <a onClick={() => this.numFunc(3)}>3</a>
          <a onClick={() => this.numFunc(4)}>4</a>
          <a onClick={() => this.numFunc(5)}>5</a>
          <a onClick={() => this.numFunc(6)}>6</a>
          <a onClick={() => this.numFunc(7)}>7</a>
          <a onClick={() => this.numFunc(8)}>8</a>
          <a onClick={() => this.numFunc(9)}>9</a>
          <a onClick={() => this.dispclr()}>C</a>
          <a onClick={() => this.numFunc(0)}>0</a>
          {!this.state.dispSci ? <a style={{fontSize:'22px'}} onClick={() => this.dispSci()}> {this.state.dispSci ? 'hide': 'show'}</a> : '' }
        </div>
        {this.state.dispSci ? 
        <div id="numbers">
          <a onClick={() => this.theta('sin')}>sin</a>
          <a onClick={() => this.theta('cos')}>cos</a>
          <a onClick={() => this.theta('tan')}>tan</a>
        </div> : ''}
    </div>
      {this.state.result.map(n => {return(<div>{n}</div>)})}
      </div>
    );
  }
}

export default App;
