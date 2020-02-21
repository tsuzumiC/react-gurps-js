import React from 'react';
import EditableField from './EditalbeField';


class AddAttributeElement extends React.Component {
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
                <td>
                    <EditableField
                        value = {this.props.element.level}
                        onChange = {this.handleChange}/>
                </td>
                <td>{this.props.element.pts}</td>
            </tr>
        );
    }
}

export default AddAttributeElement;