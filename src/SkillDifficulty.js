import React, {Component} from 'react';
import Select from './Select';

const options = [
    {value: ['E', 0], label: 'E'},
    {value: ['A', -1], label: 'A'},
    {value: ['H', -2], label: 'H'},
    {value: ['VH', -3], label: 'VH'}
];

export default class SkillDifficulty extends Component {
    render() {
        return(
            <Select
                onChange = {this.props.onChange}
                options = {options}/>
        );
    }
}
