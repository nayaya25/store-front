import {isAuthenticated} from "../../utilities";
import {useState} from "react";
import Layout from "../Layouts/layout";
import {createCategory} from "../API/category";
import {Link} from "react-router-dom";

const AddCategory = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState({status: false, message: ''})
    const [success, setSuccess] = useState({status: false, message: ''})

    const {user, token} = isAuthenticated()

    const handleSubmit = e => {
        e.preventDefault()
        setError({...error, message: ''})
        setSuccess({...success, message: ''})
        createCategory(user._id, token, {name})
            .then(data => {
                if(data.status === 'error'){
                    setSuccess({status: false, message: ''})
                    setError({status: true, message: data.message})
                }else {
                    setError({status: false, message: ''})
                    setSuccess({status: true, message: data.message})
                }

            }).catch(err => {
             setError({status: true, message: err})
        })
    }

    const goBack = () => {
        <div className='mt-5'>
            <Link to='/admin/dashboard' className='text-warning'>Back to Dashboard</Link>
        </div>
    }

    const showSuccess = () => {
        if(success.status){
            return <h3 className='text-success'>{name} is created</h3>
        }
    }

    const showError = () => {
        if(error.status){
            return <h3 className='text-danger'>Category already Created</h3>
        }
    }

    const handleChange = e => {
        setError({...error, message: ''})
        setName(e.target.value);
    }
    const newCategoryForm = () => (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label className='text-muted'>Category Name</label>
                <input
                    type='text'
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                />
            </div>
            <button className='btn btn-md btn-outline-primary' type='submit'>Create Category</button>
        </form>
    )

    return (
        <Layout title='Add Category' description='Adding Product Category' className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    {showSuccess()}
                    {showError()}
                    {newCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    )
}

export default AddCategory;