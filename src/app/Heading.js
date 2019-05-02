import React,{Component} from'react';

export class Heading extends Component{
    render() {
        return (
            <th >{this.props.heading}</th>
        )
    }
}
