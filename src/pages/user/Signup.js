import Layout from "../Layouts/layout";
import {useState} from "react";
import { register } from "../API/auth"
import {showAlert} from "../../utilities";
const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        errorMessage: '',
        success: false
    })

    const handleChange = (name) => (e) => {
        setValues({
            ...values,
            error: false,
            [name]: e.target.value
        })
    }
    const {name, email, password, error, success, errorMessage} = values
    const clickSubmit = e => {
        e.preventDefault()
        register({name, email, password}).then(data => {
            if(data.status === 'error'){
                setValues({
                    ...values,
                    error: true,
                    errorMessage: data.message,
                    success: false
                })
            }else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                })
            }
        }).catch(err => {
            setValues({
                ...values,
                error: true,
                errorMessage: err.message,
                success: false
            })
        })
    }

    const SignUpForm = () => (
        <form>
            <div className='form-group'>
                <label className='text-muted'>Name</label>
                <input
                    type='text'
                    className='form-control'
                    onChange={handleChange('name')}
                    value={name}
                    required
                />
            </div>
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
            title='Sign Up'
            description='Sign Up Page'
            className='container col-md-8 offset-md-2'
        >
            {success &&  showAlert({type: 'success', message: ''})}
            {error && showAlert({type: 'error', message: errorMessage})}
            {SignUpForm()}
        </Layout>
    )
}

export default Signup;