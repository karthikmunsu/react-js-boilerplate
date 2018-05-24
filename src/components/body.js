import React, { Component } from 'react'

import { Container, Segment, Form, Button, Header, Divider, Icon } from 'semantic-ui-react';

const attr = ['Exam-Num', 'Name'];
const subjects = ['Tamil', 'English', 'Maths', 'Science', 'Social', 'Urudu', 'Arabic', 'Computer-Science', 'General-Knowledge']

export class Body extends Component {
    constructor() {
        super();
        this.state = {
            'Exam-Num': '',
            'Name': '',
            'Tamil': 0,
            'English': 0,
            'Maths': 0,
            'Science': 0,
            'Social': 0,
            'Urudu': 0,
            'Arabic': 0,
            'Computer-Science': 0,
            'General-Knowledge': 0,
            'Total': 0,
            'Percent': 0.00,
            'Grade': '',
            'Rank': ''
        }
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
      const subject = subjects.map(sub => (
                <Form.Field key={sub}>
                    <label>
                        {sub}
                    </label>
                    <input type="number" onChange={this.handleChange} value={this.state[sub]} name={sub} placeholder={"Enter "+sub} required/>
                    {this.state[sub] !== 0 ? <Icon name="checkmark" color="green" style={{float: 'right'}}/> : '' }
                </Form.Field>
      ))
      const attrb = attr.map(atr => (
                <Form.Field key={atr}>
                    <label>
                        {atr}
                    </label>
                    <input type="text" onChange={this.handleChange} value={this.state[atr]} name={atr} placeholder={"Enter "+atr} required/>
                    {this.state[atr] !== '' && this.state[atr].length > 4 ? <Icon name="checkmark" color="green" style={{float: 'right'}}/> : ''}
                </Form.Field>
      ))
    return (
        <Container text style={{marginTop: '-14px', marginBottom: '-14px'}}><br/>
        <Divider horizontal><Header textAlign="center">Al-Ammen</Header></Divider>
            <Segment style={{backgroundColor: 'transparent'}}>
                <Form>
                    {attrb}
                    {subject}
                    <Button type="submit" primary fluid>Calculate</Button>
                </Form>
           </Segment>
        <Divider></Divider>
        </Container>
    )
  }
}
