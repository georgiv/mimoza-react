import React from 'react'
import { Divider, Input } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './InputHolder.css'

class InputHolder extends React.Component {
    setInput = (e) => {
        this.props.onInputChange(e.target.value)
    }

    render() {
        const disabled = this.props.disabled === undefined ? false : this.props.disabled

        return (
            <React.Fragment>
                <div className='input-holder'>
                    <Input disabled={disabled} transparent type={this.props.type} 
                                       placeholder={this.props.placeholder} 
                                       id={this.props.id} 
                                       icon={this.props.icon} 
                                       onChange={this.setInput} />
                    {/* <Icon name={props.icon} /> */}
                </div>
                <div className='err-holder'>
                    <p id='err-user'>none</p>
                </div>
                <Divider hidden />
            </React.Fragment>
        )
    }
}
 
export default InputHolder
