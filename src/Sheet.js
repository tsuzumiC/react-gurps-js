import React, {Component} from 'react';
import SheetAttributes from './SheetAttributes';
import SheetSkills from './SheetSkills';
import styled from 'styled-components';

const SheetPage = styled.div`
    display: grid;
    grid-template: 100% / 50% 50%;
    max-width: 1000px;
    padding: 10px;
    margin: 5px;
    box-shadow: 1px 1px 5px 5px #00000022;
    border: 1px solid #bbbbbb;
    background-color: #ffffee;
`

export default class Sheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: [],
            skills: []
        };
        this.attributeCosts = {ST: 10, DX: 20, IQ: 20, HT: 10, HP: 2, Will: 5, Per: 5, FP: 3};
        this.skillType = ['DX','IQ','HT','Per'];
        this.skillCost = {E: 0, A: -1, H: -2, VH: -3};
        this.handleAtrributeChange = this.handleAtrributeChange.bind(this);
        this.handleNewSkill = this.handleNewSkill.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
    }
    
    componentDidMount() {
        if (this.state.attributes.length === 0) {
            let tempArray = [];
            for (let [key,value] of Object.entries(this.attributeCosts)) {
                tempArray.push({
                    name: key,
                    level: 10,
                    pts: 0,
                    cost: value});
            }
            this.setState({attributes: tempArray});
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    handleAtrributeChange(name, level) {
        let tempArray = this.state.attributes.map(element => {
            if (element.name === name) {
                let tempLevel = level ? level : 0;
                let tempPts = element.cost * (level - 10);

                return {name: name, level: tempLevel, pts: tempPts, cost: element.cost};
            } else {
                return element;
            }
        });
        let tempSkills = this.updateSkills(tempArray);
        this.setState({attributes: tempArray, skills: tempSkills});
    }

    handleNewSkill(skill) {
        let tempArray = this.state.skills;
        tempArray.push({...skill});
        this.setState({
            skills: tempArray
        });
    }

    handleSkillChange(name,pts) {
        let tempArray = this.state.skills.map(element => {
            if (element.name === name) {
                return {
                    name: name,
                    type: element.type,
                    cost: element.cost,
                    level: this.calcSkillLevel(element.type, element.cost[1], pts),
                    pts: pts
                };
            } else {
                return element;
            }
        });
        this.setState({skills: tempArray});
    }

    updateSkills(attributeArray = null) {
        let tempArray = this.state.skills.map(element => {
            return {
                name: element.name,
                type: element.type,
                cost: element.cost,
                level: this.calcSkillLevel(element.type, element.cost[1],element.pts,attributeArray),
                pts: element.pts
            }
        });
        return tempArray;
    }

    calcSkillLevel(type, cost, pts, attributeArray = null) {
        let attributes = [];
        if (attributeArray){
            attributes = attributeArray;
        } else {
            attributes = this.state.attributes;
        }
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
            <SheetPage>
                <SheetAttributes 
                    attributes = {this.state.attributes}
                    onChange = {this.handleAtrributeChange}
                />
                <SheetSkills
                    skills = {this.state.skills}
                    attributes = {this.state.attributes}
                    onNewSkill = {this.handleNewSkill}
                    onChange = {this.handleSkillChange}
                />
            </SheetPage>
        );
    }
}