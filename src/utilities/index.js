import {Link} from "react-router-dom";

export const showAlert = ({ type, message }) => {
    return type === 'success' ?
        <div className={`alert alert-${type} alert-dismissible`}>
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            {!message && <p>Account Created Successfully. Please <Link to='/signin'>Sign In</Link></p>}
            {message && <p>{message}</p>}
        </div>
        :
        <div className={`alert alert-${type} alert-dismissible`}>
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            {message}
        </div>
}

export const showLoading = () => {
    return <div className='alert alert-info'>
        <h2>Loading......</h2>
    </div>
}