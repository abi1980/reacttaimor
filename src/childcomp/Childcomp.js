import React from 'react';
//import './Childcomp.css';

class Childcomp extends React.Component {
    constructor() {
        super();
        this.state = { audiounce: "Computer Science Students" }
    }
    handleClick() {
        /*
        if (this.state.trainer == "Taimor") {
            this.setState({
                trainer: this.state.trainer + " Khan",
                dev: "Dev. " + this.state.dev
            }, function () {
                console.log("Job's done");
            });
        }
        */
    }
    render() {
        return <div>
            <h1>Child Component.</h1>
            <p>There is nothing different in main comp and child comp, just </p>
            {/* <h2>Main Developer :{this.state.dev}</h2>
            <button onClick={this.handleClick.bind(this)} className="button">Test Click</button> */}
        </div>;
    }
}

export default Childcomp;