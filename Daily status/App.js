import React from 'react';

class Lifecycle extends React.Component {
    constructor() {
        console.log("constructor");
        super();
        this.state = { value: "welcome", name: "all" }
    }
    componentWillMount() {
        alert("hy guys")
        console.log("componentWillMount");
    }
    render() {
        console.log("render");
        return <div><h1>{this.state.value} {this.state.name}</h1><br />
            <button type='button' onClick={this.changeValue}>change Value</button>
        </div>
    }
    changeValue = () => {
        this.setState({ value: "good evening" })
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ value: "Thank you" })
        }, 3000)
        console.log("componentDidMount");
    }
    componentWillUpdate() {
        alert("i am willupdate");
        console.log("componentWillUpdate");
    }

}

export default Lifecycle;