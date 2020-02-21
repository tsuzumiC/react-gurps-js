import React from 'react';
import styled from 'styled-components'
import AddSkillElement from './AddSkillElement';

const TwoRowDiv = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledTable = styled.table`
    border-right: 2px solid #000;
    margin: 0 10px 10px 0;
`

class SheetSkills extends React.Component {
    constructor(props) {
        super(props);
        this.newSkill = this.newSkill.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    newSkill(name,type) {
        this.props.newSkill(name,type);
    }

    handleChange(name,value) {
        this.props.onChange(name,value);
    }
        
    render() {
        let skillColunmOne = [],
            skillColumnTwo = [];
            if (this.props.skills) { //If skills contain any enteries we add them the tables. Even left, odd right.
                this.props.skills.forEach(element => {
                    if ((skillColunmOne.length + skillColumnTwo.length) % 2 === 0) {
                        skillColunmOne.push(
                            <AddSkillElement
                                element = {element}
                                key = {element.name}
                                onChange = {this.handleChange}
                            />
                        );
                    } else {
                        skillColumnTwo.push(
                            <AddSkillElement
                                element = {element}
                                key = {element.name}
                                onChange = {this.handleChange}
                            />
                        );
                    }
                });
            }
        return (
            <TwoRowDiv>
                <StyledTable>
                    <tbody>{skillColunmOne}</tbody>
                </StyledTable>
                <StyledTable>
                    <tbody>{skillColumnTwo}</tbody>
                </StyledTable>
                <button onClick = {this.newSkill}>
                    NewSkill
                </button>
            </TwoRowDiv>
        );
    }
}

export default SheetSkills;