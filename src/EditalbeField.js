import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 2.5rem;
    text-align: right;
`

class EditableField extends React.Component {
    render() {
        return (
            <StyledInput type = "number" min = "0" value = {this.props.value} onChange = {this.props.onChange}/>
        );
    }
}

export default EditableField;