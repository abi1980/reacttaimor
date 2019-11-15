import React, { Component } from 'react';
import Popup from '../popup/Popup.js';
import { comment } from 'postcss-selector-parser';
class Testprops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            greeting: {
                sender: "Mr. Sender",
                reciver: "Mr. Reciver"
            },
            showPopup: false
        };
        //this.togglePopup = this.togglePopup.bind(this);
    }

    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow }));
    };

    togglePopup = () => {
        this.setState(state => ({ showPopup: !state.showPopup }));
    };

    // togglePopup() {
    //     this.setState({
    //         showPopup: !this.state.showPopup
    //     });
    // }

    render() {
        return (
            <div>
                <br />
                <div>{this.state.isShow ? <div>{this.state.greeting.sender}</div> : null}</div>
                <br />
                <button onClick={this.toggleShow} type="button" className="button">Toggle Show</button>
                <Greeting greeting="test" />
                <br />

                <button onClick={this.togglePopup} type="button" className="button">Show POPUP</button>

                {this.state.showPopup ?
                    <Popup text='Click "Close Button" to hide popup' closePopup={this.togglePopup} /> : null
                }
            </div>
        );
    }
}

//passing the props value in the component {greeting}
const Greeting = ({ greeting }) => <h1>{greeting}</h1>;
export default Testprops;
// closePopup={this.togglePopup.bind(this)}
// closePopup={() => this.setState({open: false})} (es-6 other option in button)

//Help
//the commented code is the second way to show the popup 
//cureently I am using the es-6 style 
// in es6 function ref of this-> object automatically present there but in vanaila we have to bind this.