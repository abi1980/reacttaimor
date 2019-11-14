import React, { Component } from 'react';
class Testprops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            greeting: {
                sender: "Mr. Sender",
                reciver: "Mr. Reciver"
            }
        };
    }
    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow }));
    };
    render() {
        return (
            <div>
                <br />
                <div>{this.state.isShow ? <div>{this.state.greeting.sender}</div> : null}</div>
                <br />
                <button onClick={this.toggleShow} type="button" className="button">Toggle Show</button>
                <Greeting greeting="test" />
            </div>
        );
    }
}
const Greeting = ({ greeting }) => <h1>{greeting}</h1>;
export default Testprops;