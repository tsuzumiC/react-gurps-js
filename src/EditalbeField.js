import React from 'react';

class EditableField extends React.Component {
    render() {
        return (
            <input type = "text" value = {this.props.value} onChange = {this.props.onChange}/>
        );
    }
}

export default EditableField;