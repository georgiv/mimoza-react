import React, { Component } from 'react'
import { Button, Checkbox, Divider, Header, Label } from 'semantic-ui-react'

import Background from './Background'
import InputHolder from './InputHolder';

import background from './res/background_register.jpg'

import 'semantic-ui-css/semantic.min.css'

const containerStyle = {
    float: 'left',
    width: '40%'
}

const headerStyle = {
    marginTop: '5%',
    marginBottom: '5%',
    fontSize: '20px',
    fontFamily: 'Segoe UI',
    fontStyle: 'italic'
}

const checkboxHolderStyle = {
    width: '40%',
    margin: '0 auto'
}

const labelStyle = {
    width: '90%',
    color: 'deeppink',
    fontSize: '10px',
    textAlign: 'center',
    fontWeight: 'normal',
    backgroundColor: 'white',
    lineHeight: '150%'
}

const anchorStyle = {
    color: 'deeppink',
    opacity: '1',
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

class Register extends Component {
    state = {
        hover: false,
        username: '',
        email: '',
        pass: '',
        retypePass: ''
    }

    toggleHover = () => {
        this.setState({ hover: !this.state.hover })
    }

    setUsername = (v) => {
        this.setState({ username: v })
    }

    setEmail = (v) => {
        this.setState({ email: v })
    }

    setPass = (v) => {
        this.setState({ pass: v })
    }

    setRetypePass = (v) => {
        this.setState({ retypePass: v })
    }

    render() {
        const anchorHoverStyle = this.state.hover ? { textDecoration: 'underline' } : { textDecoration: 'initial' }

        const disableRetypePass = this.state.pass === ''

        return (
            <React.Fragment>
                <Background background={background}/>
                <div style={containerStyle}>
                    <Divider hidden />
                    <Header textAlign='center' size='medium' color='pink' style={headerStyle}>Create an Account</Header>
                    <Divider hidden />
                    <InputHolder type='text' placeholder='Username' icon='user' onInputChange={this.setUsername} />
                    <InputHolder type='email' placeholder='Email' icon='envelope' onInputChange={this.setEmail} />
                    <InputHolder type='pass' placeholder='Password' icon='key' onInputChange={this.setPass} />
                    <InputHolder type='pass' placeholder='Retype password' icon='key' disabled={disableRetypePass} onInputChange={this.setRetypePass} />
                    <div style={checkboxHolderStyle}>
                        <Checkbox id='gdpr' />
                        <Label style={labelStyle}>
                            By creating an account you agree to our <a href='https://google.com' 
                                                                       style={{ ...anchorStyle, ...anchorHoverStyle }} 
                                                                       onMouseEnter={this.toggleHover} 
                                                                       onMouseLeave={this.toggleHover}>Terms of Sercice and Privacy Policy</a>
                        </Label>
                    </div>
                    <Divider hidden />
                    <Button color='pink' style={btnStyle}>REGISTER</Button> 
                </div>
                <Background background={background}/>
            </React.Fragment>
        )
    }
}

export default Register
