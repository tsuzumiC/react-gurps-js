import React from 'react';
import SheetAttributes from './SheetAttributes';

class Sheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: []
        }; 
        this.attributeCosts = {ST: 10, DX: 20, IQ: 20, HT: 10, HP: 2, FP: 3, Will: 5, Per: 5};
        this.handleAtrributeChange = this.handleAtrributeChange.bind(this);
    }
    
    componentDidMount() {
        if (this.state.attributes.length === 0) {
            let tempArray = [];
            for (let [key,value] of Object.entries(this.attributeCosts)) {
                tempArray.push({name: key, level: 10, pts: 0, cost: value})
            }
            this.setState({attributes: tempArray});
        }
    }

    handleAtrributeChange(){
        
    }

    render() {
        return (
            <div>
                <SheetAttributes 
                    attributes = {this.state.attributes}
                    onAttributeChange = {this.handleAtrributeChange}
                />
            </div>
        );
    }
}

export default Sheet;