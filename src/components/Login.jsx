import React, { Component } from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'

import Background from './Background'
import InputHolder from './InputHolder'

import background from './res/background_login.jpg'
import hanger from './res/hanger.png'

import 'semantic-ui-css/semantic.min.css'

const containerStyle = {
    float: 'left',
    width: '40%'
}

const hangerStyle = {
    display: 'block',
    margin: '0 auto',
    marginTop: '5%',
    padding: '1%',
    width: '15%',
    borderRadius: '50%',
    border: 'solid 1px #FFC2FE',
    MozBoxShadow: '2px 2px 2px 2px #CBBCC3',
    WebkitBoxShadow: '2px 2px 2px 2px #CBBCC3',
    boxShadow: '2px 2px 2px 2px #CBBCC3',
    transform: 'rotate(345deg)'
  }

const btnStyle = {
    width: '40%',
    padding: '12px',
    display: 'table',
    margin: '0 auto',
    fontSize: '12px',
    borderRadius: '12px',
    fontFamily: 'Segoe UI',
    fontStyle: 'italic'
}

const anchorHolderStyle = {
    margin: '0 auto',
    width: '40%',
    textAlign: 'right'
}

const anchorStyle = {
    color: 'deeppink',
    fontSize: '10px'
}

class Login extends Component {
    state = {
        username: '',
        pass: '',
    }

    setUsername = (v) => {
        this.setState({ username: v })
    }

    setPass = (v) => {
        this.setState({ pass: v })
    }

    login = async () => {
        const apiCall = await fetch('http://localhost:4000/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'venci-man',
                password: 'secret'
            })
        })
        const response = await apiCall.json();
        console.log(response);
    }

    render() {
        return (
            <React.Fragment>
                <Background background={background}/>
                <div style={containerStyle}>
                    <Divider hidden />
                    <img src={hanger} alt='hanger' style={hangerStyle} />
                    <Divider hidden />
                    <Form onSubmit={this.login}>
                        <InputHolder type='text' placeholder='Username' icon='user' onInputChange={this.setUsername} />
                        <InputHolder type='pass' placeholder='Password' icon='key' onInputChange={this.setPass} />
                        <div style={anchorHolderStyle}>
                            <a href='https://google.com' style={anchorStyle}>Forgot password?</a>
                        </div>
                        <Divider hidden />
                        <Button type='submit' color='pink' style={btnStyle}>LOGIN</Button>
                    </Form>
                </div>
                <Background background={background}/>
            </React.Fragment>
        )
    }   
}

export default Login
