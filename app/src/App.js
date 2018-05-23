import React, { Component } from 'react';
import bgImage from './images/Lighthouse-Background-26-2560x1600.jpg';
import './App.css';
import { Header, Segment, Grid, Image, Container, Item, Transition, Icon } from 'semantic-ui-react';
import Clouds from './images/cloudy.png';
import partCloud from './images/partly_cloudy.png';
import rain from './images/rain_s_cloudy.png';

const days = [{
  day: 'Monday',
  degree: '9',
  condition: rain
}, {
  day: 'Tuesday',
  degree: '12',
  condition: Clouds
}, {
  day: 'Wednesday',
  degree: '25',
  condition: partCloud
}, {
  day: 'Thrusday',
  degree: '15',
  condition: rain
}, {
  day: 'Friday',
  degree: '19',
  condition: rain
}, {
  day: 'Saturday',
  degree: '36',
  condition: Clouds
}, {
  day: 'Sunday',
  degree: '43',
  condition: rain
}];

class App extends Component {
  constructor() {
    super();
    this.state = {
      humidity: '',
      wind: '',
      place: '',
      temp: 0,
      condition: '',
      day: (new Date()).getDay(),
      animation: 'pulse',
      duration: 2000,
      visible1: true, 
      visible2: true,
      visible3: true,
      visible4: true,
      visible5: true,
      visible6: true,
      visible7: true,
      visible: [true, true, true, true, true, true, true, true]
    }
  }

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=xxxxyyyyyyy') //add your app id from open weather
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            this.setState({
              humidity: data.main.humidity,
              wind: data.wind.speed,
              place: data.name,
              temp: (data.main.temp - 273.15), //kelvin to celsius conversion
              condition: data.weather[0].main
            });
          });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }// getting the latitude and longitude co-ordinates
  }

  toogleVisiblity = (index) => {
    var arr = this.state.visible;
    arr[index] = !arr[index];
    this.setState({['visible'+index]: !this.state.visible1});
  }// to switch the transition.

  render() {
    const day = days.map((day, index) => (
      <Item key={day.day} onMouseEnter={() => { this.toogleVisiblity(index+1) }} onMouseLeave={() => { this.toogleVisiblity(index+1) }} onClick={() => { this.toogleVisiblity(index+1) }}>
        <Transition   animation={this.state.animation} duration={this.state.duration} visible={this.state.visible[index+1]}>
                {this.state.day !== index+1 ? <Segment textAlign='center' style={{marginRight:'12px', float: 'left', marginTop: '8px'}} >
                <Grid.Column >
                  <Header as='h2' style={{color: 'blue'}}>{day.day}</Header>
                  {this.state.condition === 'Clouds' ? <Image src={Clouds} size='small'/> : ''}
                  <span style={{fontSize: '50px'}}>{day.degree}&nbsp; &#870;</span><br/><br/>
                  <span style={{fontSize: '25px'}}>{this.state.condition}</span>
                </Grid.Column>
                </Segment> :
                <Segment textAlign='center' style={{marginRight:'12px', backgroundColor: 'darkgrey'}} >
                <Grid.Column >
                  <Header as='h2' style={{color: 'blue'}}>{day.day}</Header>
                  {this.state.condition === 'Clouds' ? <Image src={Clouds} size='small'/> : ''}
                  <span style={{fontSize: '50px'}}>{this.state.temp}&nbsp; &#870;</span><br/><br/>
                  <span style={{fontSize: '25px'}}>{this.state.condition}</span>
                </Grid.Column>
                </Segment> }
        </Transition>
      </Item>
  ))// adding the days as Items(Cards)
  
    return (
      <div>
        <Segment className="app" style={{backgroundImage: "url("+bgImage+")", height:'60vh', backgroundSize: '100%', backgroundRepeat: 'no-repeat', textAlign: 'center'}}>
            <Grid divided='vertically'>
              <Grid.Row columns={2} >
                <Grid.Column style={{top: '50%'}}>
                  <Header as='h1' style={{color: 'black', fontSize: '92px'}}>{this.state.temp} &#870;</Header>
                  <div style={{color: 'black', fontSize: '45px'}}>CLOUDY</div><br/><br/>
                  <div style={{fontSize:'25px'}}>
                      <b>HUMIDITY &emsp;&emsp;| &emsp;&emsp; WIND</b><br/><br/>
                      <b>&emsp;&emsp;{this.state.humidity}% &emsp;&emsp;&emsp;&nbsp;&nbsp; | &emsp;&emsp;{this.state.wind} K/M </b>
                  </div>
                </Grid.Column>
                <Grid.Column style={{top: '84%', textAlign: 'right'}}>
                  <Header as='h1' style={{color: 'black', fontSize: '42px', marginRight: '65px'}}><u>{this.state.place}</u></Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Segment>
        <Container>
            <Grid divided='vertically' verticalAlign='middle'>
              <Grid.Row columns={6}>
                {day}
              </Grid.Row>
            </Grid>
        </Container>
        <footer style={{textAlign: 'center'}}>Made in <Icon name='heart' size='large' color='red' /> with React</footer>
      </div>
    );
  }
}

export default App;
