import React, { useState } from "react";

/* Import Components */
import Button from "./formsparts/Button";
import CheckBox from "./formsparts/CheckBox";
import Input from "./formsparts/Input";
import Select from "./formsparts/Select";
import TextArea from "./formsparts/TextArea";

import "./signuplogin.css";

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: "",
                email: "",
                password: "",
                repassword: "",
                age: "",
                gender: "",
                skills: [],
                about: ""
            },

            genderOptions: ["Male", "Female", "Others"],
            skillOptions: ["Programming", "Development", "Design", "Testing"]
        };
        /*
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleInput = this.handleInput.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        */
    }

    handleInput = e => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        // alert('The value is: ' + this.input.value);
        if (this.state.newUser.name.length < 1) {
            alert('Please add your name');
        } else if (this.state.newUser.email.length < 1) {
            alert('Please add your email');
        } else if (this.state.newUser.email.length < 1) {
            alert('Please add your email');
        }

        alert(this.state.newUser.name);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    inputType={"text"}
                    name={"name"}
                    title={"Name"}
                    value={this.state.newUser.name}
                    placeholder={"Enter your Name"}
                    handleChange={this.handleInput}
                />
                <Input
                    inputType={"text"}
                    name={"email"}
                    title={"Email"}
                    value={this.state.newUser.email}
                    placeholder={"Enter your Email"}
                    handleChange={this.handleInput}
                />
                <Input
                    inputType={"password"}
                    name={"password"}
                    title={"Password"}
                    value={this.state.newUser.password}
                    placeholder={"Enter your Password"}
                    handleChange={this.handleInput}
                />
                <Input
                    inputType={"password"}
                    name={"re-password"}
                    title={"Confirm Password"}
                    value={this.state.newUser.repassword}
                    placeholder={"Re enter your Password"}
                    handleChange={this.handleInput}
                />
                <Input
                    inputType={"number"}
                    name={"age"}
                    title={"Age"}
                    value={this.state.newUser.age}
                    placeholder={"Enter your age"}
                    handleChange={this.handleInput}
                />
                {/* <label>
                    Name:
                    <input type="text" ref={(input) => this.input = input} />
                </label> */}
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Signup;






/*
import React, { useState } from "react";

import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";

// import LoaderButton from "../components/LoaderButton";
// import { useFormFields } from "../libs/hooksLib";
import "./signuplogin.css";

export default function Signup(props) {
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: ""
    });

    const [newUser, setNewUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    function validateConfirmationForm() {
        return fields.confirmationCode.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        setNewUser("test");

        setIsLoading(false);
    }

    async function handleConfirmationSubmit(event) {
        event.preventDefault();

        setIsLoading(true);
    }

    function renderConfirmationForm() {
        return (
            <form onSubmit={handleConfirmationSubmit}>
                <FormGroup controlId="confirmationCode" bsSize="large">
                    <ControlLabel>Confirmation Code</ControlLabel>
                    <FormControl
                        autoFocus
                        type="tel"
                        onChange={handleFieldChange}
                        value={fields.confirmationCode}
                    />
                    <HelpBlock>Please check your email for the code.</HelpBlock>
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateConfirmationForm()}
                >
                    Verify
        </LoaderButton>
            </form>
        );
    }

    function renderForm() {
        return (
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="confirmPassword" bsSize="large">
                    <ControlLabel>Confirm Password</ControlLabel>
                    <FormControl
                        type="password"
                        onChange={handleFieldChange}
                        value={fields.confirmPassword}
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Signup
        </LoaderButton>
            </form>
        );
    }

    return (
        <div className="Signup">
            {newUser === null ? renderForm() : renderConfirmationForm()}
        </div>
    );
}
*/