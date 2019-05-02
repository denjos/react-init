import React,{Component} from'react';

export class Row extends Component{
    render() {
            console.log(this.props.change);
        return (
            <tr>
                <td>{this.props.change.when}</td>
                <td>{this.props.change.who}</td>
                <td>{this.props.change.description}</td>
            </tr>
        )
    }
}
