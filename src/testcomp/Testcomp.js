import React from 'react';
import Childcomp from '../childcomp/Childcomp';
import Testprops from '../testprops/Testprops';
import './Testcomp.css';

class Testcomp extends React.Component {
    constructor() {
        super();
        this.state = { trainer: "Taimor", dev: "Khawaja" }
    }
    handleClick() {
        if (this.state.trainer === "Taimor") {
            this.setState({
                trainer: this.state.trainer + " Khan",
                dev: "Dev. " + this.state.dev
            }, function () {
                console.log("Job's done");
            });
        }
    }
    render() {
        return <div>
            <h1>This is my Test Component.</h1>
            <h2>Main Trainer :{this.state.trainer}</h2>
            <h2>Main Developer :{this.state.dev}</h2>
            <button onClick={this.handleClick.bind(this)} className="button">Test Click</button>
            <Childcomp trainer={this.state.trainer} />
            <br />
            <Testprops />
            <br />
        </div>;
    }
}

export default Testcomp;