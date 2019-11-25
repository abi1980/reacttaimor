/* https://codesandbox.io/embed/x8omy0p9z */
import React, { useState } from "react";

/* Import Components */
import Button from "./formsparts/Button";
import CheckBox from "./formsparts/CheckBox";
import Input from "./formsparts/Input";
import Select from "./formsparts/Select";
import TextArea from "./formsparts/TextArea";
import Listsignup from "./Listsignup";

import "./signuplogin.css";
// import { arrayExpression } from "@babel/types";
// import { isArray } from "util";

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
                about: "",
                phone: "",
            },

            genderOptions: ["Male", "Female", "Others"],
            skillOptions: ["Programming", "Development", "Design", "Testing"],
            users: []
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

    /* This lifecycle hook gets executed when the component mounts */

    handleInput = e => {
        let value = e.target.value;
        let name = e.target.name;
        console.log(name, value)
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

    handleFullName = e => {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleAge = e => {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    age: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleTextArea = e => {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    about: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleCheckBox = e => {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.newUser.skills.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.newUser.skills.filter(
                s => s !== newSelection
            );
        } else {
            newSelectionArray = [...this.state.newUser.skills, newSelection];
        }

        this.setState(prevState => ({
            newUser: { ...prevState.newUser, skills: newSelectionArray }
        }));
        console.log("skilssssssssss", this.state.newUser.skills);
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

        // this.setState({
        //     name: this.userData.name,
        //     email: this.userData.email,
        //     phone: this.userData.phone
        // })

        // if (isArray(this.users)) {
        //     this.users.push(this.state.newUser);
        // } else {
        //     this.users = this.state.newUser;
        // }

        let storage = JSON.parse(localStorage.getItem('ud')) || [];
        storage.push(this.state.newUser);
        localStorage.setItem('ud', JSON.stringify(storage));

        //this.users.push(this.state.newUser);
        //localStorage.setItem('test', JSON.stringify(this.users));

        //console.log("Test ", this.state.newUser.email);
        //alert(this.state.newUser.name);
        //this.setState({ newUser: storage });
    }

    //Testing Life Cycle for React Start
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        //alert(this.userData);
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone,
                password: this.userData.password,
                repassword: this.userData.repassword,
                age: this.userData.age,
                gender: this.userData.gender,
                skills: this.userData.skills,
                about: this.userData.about,
            })
        } else {
            this.setState({
                name: "",
                email: "",
                password: "",
                repassword: "",
                age: "",
                gender: "",
                skills: [],
                about: "",
                phone: ""
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState.newUser));
    }
    //Testing Life Cycle for React End

    render() {
        return (
            <div>
                <Listsignup />
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
                        name={"repassword"}
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
                    <Input
                        inputType={"text"}
                        name={"phone"}
                        title={"Phone"}
                        value={this.state.newUser.phone}
                        placeholder={"Enter your Phone"}
                        handleChange={this.handleInput}
                    />
                    <Select
                        title={"Gender"}
                        name={"gender"}
                        options={this.state.genderOptions}
                        value={this.state.newUser.gender}
                        placeholder={"Select Gender"}
                        handleChange={this.handleInput}
                    />
                    <CheckBox
                        title={"Skills"}
                        name={"skills"}
                        options={this.state.skillOptions}
                        selectedOptions={this.state.newUser.skills}
                        handleChange={this.handleCheckBox}
                    />
                    <TextArea
                        title={"About you."}
                        rows={10}
                        value={this.state.newUser.about}
                        name={"about"}
                        handleChange={this.handleTextArea}
                        placeholder={"Describe your experience and skills"}
                    />
                    <Button
                        action={this.handleFormSubmit}
                        type={"primary"}
                        title={"Submit"}
                        style={buttonStyle}
                    />
                    <Button
                        action={this.handleClearForm}
                        type={"secondary"}
                        title={"Clear"}
                        style={buttonStyle}
                    />
                    {/* <label>
                    Name:
                    <input type="text" ref={(input) => this.input = input} />
                </label> */}
                    < input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

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