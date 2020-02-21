import React from 'react';
import EditableField from './EditalbeField';

class AddSkillElement extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(this.props.element.name, parseInt(e.target.value, 10));
    }

    render() {
        return (
            <tr>
                <td>{this.props.element.name}</td>
                <td>{`${this.props.element.type}/${this.props.element.cost[0]}`}</td>
                <td>{this.props.element.level}</td>
                <td>
                    <EditableField
                        value = {this.props.element.pts}
                        onChange = {this.handleChange}/>
                </td>
            </tr>
        );
    }
}

export default AddSkillElement;