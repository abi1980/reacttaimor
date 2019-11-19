import React from "react";
/*
Routing
After using [$ npm install --save react-router-dom] this
We added this line of code.
*/
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

import './Testrouting.css';
// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/contact",
        component: Contactroute
    },
    {
        path: "/profile",
        component: Profileroute,
        routes: [
            {
                path: "/profile/designing",
                component: Designingroute
            },
            {
                path: "/profile/development",
                component: Developmentroute
            }
        ]
    },
    {
        path: "/",
        component: Homeroute
    }
];

export default function RouteConfigExample() {
    return (
        <Router>
            <div>
                <ul className="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
        <Route
            exec
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

function Homeroute() {
    return <h2>Home</h2>;
}

function Contactroute() {
    return <h2>Contact Us</h2>;
}

function Profileroute({ routes }) {
    return (
        <div>
            <h2>Profile</h2>
            <ul className="horizontal">
                <li>
                    <Link to="/profile/designing">Designing</Link>
                </li>
                <li>
                    <Link to="/profile/development">Development</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    );
}

function Designingroute() {
    return <h3>Designing</h3>;
}

function Developmentroute() {
    return <h3>Development</h3>;
}
