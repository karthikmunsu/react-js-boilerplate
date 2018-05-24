import React, { Component } from 'react'
import {Menu, Image} from 'semantic-ui-react';
import logo from './images/logo.png';

export class NavBar extends Component {
  render() {
    return (
        <Menu widths={1} style={{backgroundColor: '#BDF6D0'}}>
            <Menu.Item><Image src={logo}/></Menu.Item>
        </Menu>
    )
  }
}