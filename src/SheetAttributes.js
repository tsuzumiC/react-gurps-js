import React from 'react';
import styled from 'styled-components'
import AddAttributeElement from './AddAttributeElement';

const TwoRowDiv = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledTable = styled.table`
    border-right: 2px solid #000;
    margin: 0 10px 10px 0;
`
class SheetAttributes extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name,value) {
        this.props.onChange(name,value);
    }

    render() {
        let mainAttributeList = [],
            secondAttributeList = [];
        this.props.attributes.forEach(element => {
            if (mainAttributeList.length <= 3) { //Will probably rework two lists into one which switch column after the fourth.
                mainAttributeList.push(
                    <AddAttributeElement
                        element = {element}
                        key = {element.name}
                        onChange = {this.handleChange}
                    />
                );
            } else if (secondAttributeList.length <= 3) {
                secondAttributeList.push(
                    <AddAttributeElement
                        element = {element}
                        key = {element.name}
                        onChange = {this.handleChange}
                    />
                );
            }
        });

        return (
            <TwoRowDiv>
                <StyledTable>
                    <tbody>{mainAttributeList}</tbody>
                </StyledTable>
                <StyledTable>
                    <tbody>{secondAttributeList}</tbody>
                </StyledTable>
            </TwoRowDiv>

        );
    }
}

export default SheetAttributes;