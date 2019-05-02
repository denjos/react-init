import React, {Component} from 'react';
import {Heading} from "./Heading";
import {Row} from "./Row";
import {format} from 'timeago.js';

class Headings extends Component {
    render() {
        return (
            <thead>
            <tr>
                {this.props.headings.map((heading, key) => {
                    return (<Heading heading={heading} key={key}/>)
                })}
            </tr>
            </thead>
        )
    }

}

class Rows extends Component {
    render() {
        return (
            <tbody>
            {
                this.props.data.map((row, key) => {
                    return (
                        <Row key={key} change={row}/>
                    )
                })
            }
            </tbody>
        )
    }

}

class App extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }

    }

    async componentDidMount() {

        setInterval(async ()=>{
        const response = await fetch('https://openlibrary.org/recentchanges.json?limit=10');
        const info = await response.json();
        console.log(info);
        this.setState({data: this.formatData(info)});
        },1000);
    }

    formatData(data) {
        return data.map((item, key) => {
                return {
                    "when": format(item.timestamp),
                    "who": item.author.key,
                    "description": item.comment
                }
            }
        )
    }

    render() {
        return (
            <div className="container p-4">
                <h1>{this.props.title}</h1>
                <table className="table table-bordered">
                    <Headings headings={this.props.headings}/>
                    <Rows data={this.state.data}/>
                </table>

            </div>
        );
    }
}

export default App