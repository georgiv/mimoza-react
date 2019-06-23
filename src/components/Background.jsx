import React from 'react'

const style = {
    float: 'left',
    width: '30%'
}

const Background = (props) => {
    return (
        <img src={props.background} alt='background' style={style}/>
    )
}

export default Background
