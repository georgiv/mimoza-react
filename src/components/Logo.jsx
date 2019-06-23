import React from 'react'

import mimoza from './res/mimoza.png'

const containerStyle = {
    padding: '3% 40%',
    backgroundColor: 'black'
  }

const style = {
    width: '100%',
    margin: '0 auto'
}

const Logo = () => {
    return (
        <div style={containerStyle}>
            <img src={mimoza} alt='mimoza' style={style}/>
        </div>
    )
}

export default Logo
