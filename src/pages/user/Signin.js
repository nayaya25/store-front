import Layout from "../Layouts/layout";
import {useState} from "react";
import {authenticate, signin} from "../API/auth"
import {showAlert, showLoading, redirectUser} from "../../utilities";

const Signin = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: false,
        errorMessage: '',
        redirectToReferrer: false,
        loading: false,
        success: false
    })

    const handleChange = (name) => (e) => {
        setValues({
            ...values,
            error: false,
            [name]: e.target.value
        })
    }
    const {email, password, error, redirectToReferrer, loading, success, errorMessage} = values
    const clickSubmit = e => {
        e.preventDefault()
        setValues({...values, loading: true, error: false, success: false})
        if(email === "" || password ===  ""){
            setValues({
                ...values,
                loading: false,
                error: true,
                errorMessage: "Email/Password Cannot be blank"
            })
        }
        signin({email, password}).then(data => {
            if(data.status === 'error'){
                console.log(data)
                setValues({
                    ...values,
                    error: true,
                    errorMessage: data.message,
                    success: false,
                    loading: false
                })
            }else {
                console.log(data)
                authenticate(data, () => {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: false,
                        errorMessage: '',
                        loading: false,
                        success: true
                    })
                })
            }
        }).catch(err => {
            console.log(err)
            setValues({
                ...values,
                error: true,
                errorMessage: err.message,
                success: false,
                loading: false
            })
        })
    }

    const SigninForm = () => (
        <form>
            <div className='form-group'>
                <label className='text-muted'>Email</label>
                <input
                    type='email'
                    className='form-control'
                    onChange={handleChange('email')}
                    value={email}
                    required
                />
            </div>
            <div className='form-group'>
                <label className='text-muted'>Password</label>
                <input
                    type='password'
                    className='form-control'
                    onChange={handleChange('password')}
                    value={password}
                    required
                />
            </div>
            <button
                className='btn btn-md btn-primary'
                onClick={clickSubmit}
            >
                Submit
            </button>
        </form>
    )

    return (
        <Layout
            title='Sign In'
            description='Sign In  Page'
            className='container col-md-8 offset-md-2'
        >
            {loading && showLoading()}
            {success &&  showAlert({type: 'success', message: 'Signed In Successfully'})}
            {error && showAlert({type: 'danger', message: errorMessage})}
            {SigninForm()}
            {redirectUser(redirectToReferrer)}
        </Layout>
    )
}

export default Signin;