import React from 'react';
import Childcomp from '../childcomp/Childcomp';
import Testprops from '../testprops/Testprops';
import RouteConfigExample from '../testrouting/Testrouting';
import './Testcomp.css';

// In the above line we use import to import the component
// like import key word then name of the component you want to import
// then from key word then file path from where that component can be import.

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
            {/* <RouteConfigExample /> */}
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