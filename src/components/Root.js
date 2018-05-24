import React, { Component } from 'react'
import bgImage from './images/congruent_pentagon.png';
import { Body } from './body';

export class Root extends Component {
    constructor() {
        super();
        this.state = {
            body: 'Hi body component'
        }
    }
  render() {
    return (
      <div className="app" style={{backgroundImage: `url(${bgImage})`}}>
        <Body bodyProps={this.state.body}/>
      </div>
    )
  }
}
