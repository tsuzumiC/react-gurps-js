import React, {Component} from 'react';
import styled from 'styled-components'
import AddAttributeElement from './AddAttributeElement';

const ThreeColumn = styled.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    border: 1px solid #888844;
    margin-right: 5px;
`
const StyledTable = styled.table`

`
export default class SheetAttributes extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name,value) {
        this.props.onChange(name,value);
    }

    render() {
        let column1 = [],
            column2 = [],
            column3 = [];
        this.props.attributes.forEach(element => {
            if (column1.length <= 3) { //Will probably rework two lists into one which switch column after the fourth.
                column1.push(
                    <AddAttributeElement
                        element = {element}
                        key = {element.name}
                        onChange = {this.handleChange}
                    />
                );
            } else if (column2.length <= 3) {
                column2.push(
                    <AddAttributeElement
                        element = {element}
                        key = {element.name}
                        onChange = {this.handleChange}
                    />
                );
            } else if (column3.length <= 3) {
                column3.push(
                    <AddAttributeElement
                        element = {element}
                        key = {element.name}
                        onChange = {this.handleChange}
                    />
                );
            }
        });

        return (
            <ThreeColumn>
                <StyledTable>
                    <tbody>{column1}</tbody>
                </StyledTable>
                <StyledTable>
                    <tbody>{column2}</tbody>
                </StyledTable>
                <StyledTable>
                    <tbody>{column3}</tbody>
                </StyledTable>
            </ThreeColumn>
        );
    }
}