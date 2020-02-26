import React, {Component} from 'react';
import styled from 'styled-components';
import EditableNumberField from './EditalbeNumberField';
import EditableTextField from './EditalbeTextField';
import SkillDefault from './SkillDefault';
import SkillDifficulty from './SkillDifficulty';

const NewSkillBox = styled.tr`
    display: grid;
    grid-template: 1fr 1fr / 1fr 3rem 3rem 4rem 3rem 3rem;
    background-color: #fff4aa;
    border: 1px solid #2244ff
`

export default class NewSkillPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: 'DX',
            cost: ['E', 0],
            level: this.calcSkillLevel('DX', 0, 1),
            pts: 1
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.submitSkill = this.submitSkill.bind(this);
        this.skillDefault = this.skillDefault.bind(this);
        this.skillDifficulty = this.skillDifficulty.bind(this);
        this.handlePtsChange = this.handlePtsChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    submitSkill(e) {
        this.props.skills.find(element => {
            return (element.name === this.state.name);
        }) ? alert("Skill already exists") : this.props.onSubmit(this.state);
        e.preventDefault();
    }

    skillDefault(e) {
        this.setState({type: e.target.value});
    }

    skillDifficulty(e) {
        let temp = e.target.value.split(',');
        temp.splice(1,1,parseInt(temp[1], 10));
        this.setState({cost: temp});
    }

    handlePtsChange(e) {
        this.setState({
            level: this.calcSkillLevel(this.state.type, this.state.cost[1], parseInt(e.target.value, 10)),
            pts: e.target.value
        });
    }

    calcSkillLevel(type, cost, pts) {
        let attributes = this.props.attributes;
        let skillAttributeLevel = attributes.find(element => {
            return element.name === type;
        }).level;
        if (pts === 0) {
            return skillAttributeLevel + cost - 4;
        } else if (pts === 1) {
            return skillAttributeLevel + cost;
        } else if (pts === 2) {
            return skillAttributeLevel + cost + 1;
        } else {
            return skillAttributeLevel + cost + Math.floor(pts/4) + 1;
        }
    }

    render() {
        return (
            <NewSkillBox>
                <td>
                    <EditableTextField
                        value = {this.state.name}
                        onChange = {this.handleNameChange}/>
                </td>
                <td>
                    <SkillDefault
                        onChange = {this.skillDefault}/>
                </td>
                <td>
                    <SkillDifficulty
                        onChange = {this.skillDifficulty}/>
                </td>
                <td style = {{textAlign: "center"}}>
                {`${this.state.type}/${this.state.cost[0]}`}
                </td>
                <td style = {{textAlign: "center"}}>
                    {this.state.level}
                </td>
                <td>
                    <EditableNumberField
                        value = {this.state.pts}
                        onChange = {this.handlePtsChange}/>
                </td>
                <td style = {{gridColumn: 6}}>
                    <button
                        onClick = {this.submitSkill}>
                            Add
                    </button>
                </td>
            </NewSkillBox>
        );
    }
}