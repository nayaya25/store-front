import {Route, Redirect} from "react-router-dom"
import {isAuthenticated} from "../src/utilities"

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route
        {...rest}
        render={props => isAuthenticated() ? (<Component {...rest}/>) : (
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