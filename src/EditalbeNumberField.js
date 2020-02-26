import React, {Component} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 2.5rem;
    text-align: right;
`

export default class EditableNumberField extends Component {
    render() {
        return (
            <StyledInput
                type = "number"
                min = "0"
                value = {this.props.value}
                onChange = {this.props.onChange}/>
        );
    }
}