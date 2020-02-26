import React, {Component} from 'react';
import styled from 'styled-components'
import AddSkillElement from './AddSkillElement';
import NewSkillPopUp from './NewSkillPopUp';

const StyledDiv = styled.div`
    border: 1px solid #888844;
    margin-left: 5px
`
const StyledTBody = styled.tbody`
    
`
const StyledTR = styled.tr`
    display: grid;
    grid-template: 1fr / 1fr 4rem 3rem 3rem;
    background-color: #fff4aa;
    border: 1px solid #2244ff
`
const StyledTable = styled.table`
    width: 100%
`

export default class SheetSkills extends Component {
    constructor(props) {
        super(props);
        this.makeNewSkill = this.makeNewSkill.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNewSkill = this.addNewSkill.bind(this);
        this.bAddNewSkill = false;
    }

    makeNewSkill() {
        this.bAddNewSkill = true;
        this.forceUpdate();
    }

    addNewSkill(skill) {
        this.props.onNewSkill(skill);
        this.bAddNewSkill = false;
    }

    handleChange(name,value) {
        this.props.onChange(name,value);
    }
        
    render() {
        let skillColunm = [];
        if (this.props.skills) {
            this.props.skills.forEach(element => {
                skillColunm.push(
                    <AddSkillElement
                        element = {element}
                        key = {element.name}
                        onChange = {this.handleChange}
                    />
                );
            });
        }
        if (this.bAddNewSkill) {
            skillColunm.push(
                <NewSkillPopUp
                    skills = {this.props.skills}
                    attributes = {this.props.attributes}
                    onSubmit = {this.addNewSkill}
                    />
            );
        }
        return (
            <StyledDiv>
                <StyledTable>
                    <thead>
                        <StyledTR>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Level</th>
                            <th>Pts</th>
                        </StyledTR>
                    </thead>
                    <StyledTBody>{skillColunm}</StyledTBody>
                </StyledTable>
                <button
                    onClick = {this.makeNewSkill}
                    disabled = {this.bAddNewSkill}>
                        NewSkill
                </button>
            </StyledDiv>
        );
    }
}