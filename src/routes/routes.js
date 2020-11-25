import { BrowserRouter, Switch, Route } from "react-router-dom"

import Signup from "../pages/user/Signup"
import Signin from "../pages/user/Signin"
import Home from "../pages/main/Home"
import PrivateRoute from "./privateRoute";
import AdminRoute from "./adminRoute";
import Dashboard from "../pages/user/Dashboard";
import AdminDashboard from "../pages/user/AdminDashboard";
import AddCategory from "../pages/category/addCategory";
import AddProduct from "../pages/product/addProduct";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin}/>
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path='/admin/category/create' exact component={AddCategory}/>
                <AdminRoute path='/admin/product/create' exact component={AddProduct}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;