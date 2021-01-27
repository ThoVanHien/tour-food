import * as React from "react"
import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom"

import {ROUTERS} from "Constants/Common.Constant";
import {
    // public
    Login, 
    Register,

    // private
    Dashboard,
} from "Pages"
import PrivateRoute from "./PrivateRoute.Component";
import PublicRoute from "./PublicRoute.Component";


const Routes = () => (
    <Router>
        <Switch>
            {/* Public route */}
            <Redirect exact from={"/"} to={ROUTERS.LOGIN} />
            <PublicRoute path={ROUTERS.LOGIN} component={Login} />
            <PublicRoute path={ROUTERS.REGISTER} component={Register} />

            {/* Private route */}
            <PrivateRoute path={ROUTERS.DASHBOARD} component={Dashboard} />
        </Switch>
    </Router>
)
export default Routes