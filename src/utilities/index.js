import {Link, Redirect} from "react-router-dom";


export const isAuthenticated = () => {
    if(typeof window == "undefined"){
        return false;
    }

    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'));
    }

    return false;
}

export const showAlert = ({ type, message }) => {
    return type === 'success' ?
        <div className={`alert alert-${type} alert-dismissible`}>
            {!message && <p>Account Created Successfully. Please <Link to='/signin'>Sign In</Link></p>}
            {message && <p>{message}</p>}
        </div>
        :
        <div className={`alert alert-${type} alert-dismissible`}>
            {message}
        </div>
}

export const showLoading = () => {
    return <div className='alert alert-info'>
        <h2>Loading......</h2>
    </div>
}

const authData = isAuthenticated();
export const redirectUser = (redirUser) => {
    if(redirUser){
        if(authData && authData.user.role === 1){
            return <Redirect to='/admin/dashboard'/>
        }
        return <Redirect to='/user/dashboard'/>
    }
}

export const isAdmin = authData && authData.user.role === 1
