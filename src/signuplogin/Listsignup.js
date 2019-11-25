import React, { useState } from "react";
// import "./listsignup.css";

function Listinglist(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.password}</td>
            <td>{props.age}</td>
            <td>{props.phone}</td>
            <td>{props.skills}</td>
            <td>{props.about}</td>
        </tr>
    );
}
let recs = JSON.parse(localStorage.getItem('ud')) || [];
class Listsignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ""
        };
    }
    render() {
        return (
            <div>
                <table width='100%'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Skills</th>
                            <th>About</th>
                        </tr>
                    </thead>
                    {recs.map((rec, index) => <Listinglist
                        name={rec.name}
                        email={rec.email}
                        password={rec.password}
                        age={rec.age}
                        gender={rec.gender}
                        skills={rec.skills}
                        phone={rec.phone}
                        about={rec.about}
                    />
                    )}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Skills</th>
                            <th>About</th>
                        </tr>
                    </tfoot>
                </table>
                <br /><br /><br /><br />
            </div>
        );
    }
}

export default Listsignup;