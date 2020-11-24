import { BrowserRouter, Switch, Route } from "react-router-dom"

import Signup from "./pages/user/Signup"
import Signin from "./pages/user/Signin"
import Home from "./pages/main/Home"
import PrivateRoute from "./privateRoute";
import Dashboard from "./pages/user/Dashboard";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin}/>
                <PrivateRoute path="/admin/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;