import React, {Component} from 'react';
import styled from 'styled-components';
import EditableNumberField from './EditalbeNumberField';

const StyledTR = styled.tr`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 4rem 3rem 3rem;
`

export default class AddSkillElement extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleChange(e) {
        this.props.onChange(this.props.element.name, parseInt(e.target.value, 10));
    }

    handleClicked(e) {
        if (e.target.tagName === 'TD') {
            console.log(e.target);
        }
        
    }

    render() {
        return (
            <StyledTR onClick = {this.handleClicked}>
                <td>{this.props.element.name}</td>
                <td style = {{textAlign: "center"}}>{`${this.props.element.type}/${this.props.element.cost[0]}`}</td>
                <td style = {{textAlign: "center"}}>{this.props.element.level}</td>
                <td>
                    <EditableNumberField
                        value = {this.props.element.pts}
                        onChange = {this.handleChange}/>
                </td>
            </StyledTR>
        );
    }
}