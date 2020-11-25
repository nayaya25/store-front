import {Route, Redirect} from "react-router-dom"
import {isAuthenticated} from "../utilities"

const AdminRoute = ({ component: Component, ...rest }) => {
    return <Route
        {...rest}
        render={props => isAuthenticated() && isAuthenticated().user.role === 1 ? (<Component {...rest}/>) : (
            <Redirect
                to={
                    {
                        pathname: "/signin",
                        state: {
                            from: props.location
                        }
                    }
                }
            />
        )}
    />
}

export default AdminRoute;