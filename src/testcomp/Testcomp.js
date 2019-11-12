import React from 'react';
import './Testcomp.css';

class Testcomp extends React.Component {
    constructor() {
        super();
        this.state = { trainer: "Taimor", dev: "Khawaja" }
    }
    render() {
        return <div>
            <h1>This is my Test Component.</h1>
            <h2>Main Trainer :{this.state.trainer}</h2>
            <h2>Main Developer :{this.state.dev}</h2>
        </div>;
    }
}

export default Testcomp;