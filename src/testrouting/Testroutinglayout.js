import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useLocation //for query string
} from "react-router-dom";
import './Testrouting.css';
const routes = [
    {
        path: "/contact",
        exact: true,
        component: Contactroute
    },
    {
        path: "/profile",
        component: Profileroute
    },
    {
        path: "/",
        component: Homeroute
    }
];

export default function RouteActiveExample() {
    return (
        <Router>
            <div className="navpanel">
                <nav id="primary_nav_wrap">
                    <ul>
                        <li>
                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/profile?name=design">Profile</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <Switch>
                {/* {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))} */}
                <Route path="/contact" component={Contactroute} />
                <Route path="/profile" component={Profileroute} />
                <Route path="/" component={Homeroute} />
            </Switch>
        </Router>
    );
}

function RouteWithSubRoutes(route) {
    return (
        <Route
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

function Profileroute() {
    return <h2>Profile {new URLSearchParams(useLocation().search).get("name")}</h2>;
}