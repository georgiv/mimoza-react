import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import background from './res/background_welcome.jpg'

const containerStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const sep1Style = {
    width: '100%',
    height: '1px',
    backgroundColor: 'deeppink'
}

const sep2Style = {
    width: '100%',
    height: '5px',
    backgroundColor: 'black'
}

const btnStyle = {
    width: '16%',
    padding: '12px',
    display: 'table',
    margin: '0 auto',
    marginTop: '50vh',
    marginBottom: '1%',
    fontSize: '12px',
    borderRadius: '12px',
    fontFamily: 'Segoe UI',
    fontStyle: 'italic'
}

const pStyle = {
    marginBottom: '0%',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '15px',
    color: 'deeppink'
}

const linkStyle = {
    fontStyle: 'normal',
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: 'deeppink'
}

const Welcome = () => {
    return (
        <div style={containerStyle}>
            <div style={sep1Style}></div>
            <div style={sep2Style}></div>
            <Link to='/register'>
                <Button color='pink' style={btnStyle}>SIGN UP!</Button>
            </Link>
            <p style={pStyle}>Have an account?</p>
            <Link to='/login'>
                <p style={{ ...pStyle, ...linkStyle }}>Log in!</p>
            </Link>
        </div>
    )
}

export default Welcome
