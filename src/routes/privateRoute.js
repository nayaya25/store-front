import {Route, Redirect} from "react-router-dom"
import {isAuthenticated} from "../utilities"

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route
        {...rest}
        render={props => isAuthenticated() && isAuthenticated().user.role === 0? (<Component {...rest}/>) : (
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

export default PrivateRoute;