import React, { Component } from 'react'
import {Icon} from 'semantic-ui-react';
export class Footer extends Component {
  render() {
    return (
      <div style = {{textAlign: 'center', backgroundColor: '#BDF6D0'}}>
        <footer>Made in <Icon name="heart" size="small" color="red"/> with React</footer>
      </div>
    )
  }
}
