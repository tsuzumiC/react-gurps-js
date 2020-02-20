import React from 'react';
import EditableField from './EditalbeField';


class AddElements extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.element.name}</td>
                <td><EditableField value = {this.props.element.level} onChange = {this.props.onChange}/> </td>
                <td>{this.props.element.pts}</td>
            </tr>
        );
    }
}

export default AddElements;