import React, {Component} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
`

export default class EditableNumberField extends Component {
    render() {
        return (
            <StyledInput
                type = "text"
                value = {this.props.value}
                onChange = {this.props.onChange}/>
        );
    }
}