import React, {Component} from 'react';
import styled from 'styled-components';
import EditableNumberField from './EditalbeNumberField';

const StyledTR = styled.tr`
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    margin-top: 2px;
`

export default class AddAttributeElement extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(this.props.element.name, parseInt(e.target.value, 10));
    }

    render() {
        return (
            <StyledTR>
                <td>{this.props.element.name}</td>
                <td>
                    <EditableNumberField
                        value = {this.props.element.level}
                        onChange = {this.handleChange}/>
                </td>
                <td style={{textAlign: "right", marginRight: "5px"}}>{this.props.element.pts}</td>
            </StyledTR>
        );
    }
}