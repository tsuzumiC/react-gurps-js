import React, {Component} from 'react';
import Select from './Select';

const options = [
    { value: 'DX', label: 'DX' },
    { value: 'IQ', label: 'IQ' },
    { value: 'HT', label: 'HT' },
    { value: 'Per', label: 'Per' }
];

export default class SkillDefault extends Component {
    render() {
        return(
            <Select
                onChange = {this.props.onChange}
                options = {options}/>
        );
    }
}
