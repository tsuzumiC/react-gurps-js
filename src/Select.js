import React, {Component} from 'react';

export default class Select extends Component {
    render() {
        let optionList = [];
        this.props.options.forEach(element => {
            optionList.push(
                <option value = {element.value} key = {element.label}>
                    {element.label}
                </option>)
        });
        return(
            <select onChange = {this.props.onChange}>
                {optionList}
            </select>
        );
    }
}