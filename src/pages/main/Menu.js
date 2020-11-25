import {Link, withRouter} from "react-router-dom"
import {signout} from "../API/auth"
import {isAdmin, isAuthenticated} from "../../utilities"
import {Fragment} from "react";

const isActive = (history, path) => {
    if(history.location.pathname === path){
        return { color: "#ff9900" }
    } else {
        return { color: "#ffffff" }
    }
}
const Menu = ( { history }) => {
    const adminPath = isAdmin ? '/admin/dashboard' : '/user/dashboard'
    return <div>
        <ul className='nav nav-tabs bg-dark text-white'>
            <li className='nav-item'>
                <Link className='nav-link' style={isActive(history, '/')} to='/'>Home</Link>
            </li>
            {!isAuthenticated() && (
                <>
                    <li className='nav-item'>
                        <Link className='nav-link' style={isActive(history, '/signin')} to='/signin'>Sign In</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' style={isActive(history, '/signup')} to='/signup'>Sign Up</Link>
                    </li>
                </>
                )}

            {isAuthenticated() && (
                <Fragment>
                    <li className='nav-item'>
                        <Link className='nav-link' style={isActive(history, adminPath)} to={adminPath}>Dashboard</Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            style={{cursor: "pointer", color: "#ffffff"}}
                            onClick={() =>
                                signout(() => {
                                    history.push("/")
                                })
                            }
                        >
                            Sign Out
                        </Link>
                    </li>
                </Fragment>
            )}
        </ul>
    </div>
}

export default withRouter(Menu);