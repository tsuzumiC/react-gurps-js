import React from 'react';
import AddElements from './AddElements';

class SheetAttributes extends React.Component {
    render() {
        let attributeList = [];
        this.props.attributes.forEach(element => {
            attributeList.push(
                <AddElements
                    element = {element}
                    key = {element.name}
                    onChange = {this.props.onAttributeChange}
                />
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>{attributeList}</tbody>
            </table>
        );
    }
}

export default SheetAttributes;