import {isAuthenticated} from "../../utilities";
import {useEffect, useState} from "react";
import Layout from "../Layouts/layout";
import { createProduct } from "../API/product/index"
import {Link} from "react-router-dom";

const AddProduct = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: {},
        createdProduct: '',
        redirectToProfile: false,
        formData: {},
        success: {}
    })

    const {
        name,
        description,
        price,
        category,
        shipping,
        quantity,
        photo,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData,
        success
    } = values;

    const {user, token} = isAuthenticated()


    const clickSubmit = evt => {
        evt.preventDefault()
        console.log(values)
        setValues({...values, error: {...error, status: false, message: ''}, loading: true})
        createProduct(user._id, token, formData)
            .then(data => {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    photo: '',
                    price: '',
                    quantity: '',
                    loading: false,
                    createdProduct: data.name
                })
            })
            .catch(err => console.log(err))
    }

    const newProductForm = () => (
        <form className='mb-3' onSubmit={clickSubmit}>
            <h4>Post a photo</h4>
            <div className='form-group'>
                <label>
                    <input type='file' onChange={handleChange('photo')} name='photo' accept='image/*'/>
                </label>
            </div>
            <div className='form-group'>
                <label className='text-muted'>Name</label>
                <input type='text' name='photo' onChange={handleChange('name')} value={name} className='form-control'/>
            </div>
            <div className='form-group'>
                <label className='text-muted'>Description</label>
                <input type='text'  onChange={handleChange('description')} value={description} className='form-control'/>
            </div>
            <div className='form-group'>
                <label className='text-muted'>Price</label>
                <input type='number' value={price} onChange={handleChange('price')} className='form-control'/>
            </div>
            <div className='form-group'>
                <label className='text-muted'>Category</label>
                <select type='text' onChange={handleChange('category')} className='form-control'>
                    <option value='ghaslkdjshdak'>Electronics</option>
                    <option value='ghaslkdjshdak'>Phones/Tablets</option>
                </select>
            </div>
            <div className='form-group'>
                <label className='text-muted'>Shipping</label>
                <select type='text' onChange={handleChange('shipping')} className='form-control'>
                    <option value='ghaslkdjshdak'>Yes</option>
                    <option value='ghaslkdjshdak'>No</option>
                </select>
            </div>
            <div className='form-group'>
                <label className='text-muted'>Quantity</label>
                <input type='number' value={quantity} onChange={handleChange('quantity')} className='form-control'/>
            </div>
            <button className='btn btn-md btn-outline-primary'>Create Product</button>
        </form>
    )

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
            return <h3 className='text-danger'>{error.message}</h3>
        }
    }

    const fData = new FormData();

    useEffect(() => {
        setValues({...values, formData: fData})
    }, [])

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({
            ...values,
            error: false,
            [name]: value
        })
    }

    return (
        <Layout title='Add Product' description='Adding Product' className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    {showSuccess()}
                    {showError()}
                    {newProductForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    )
}

export default AddProduct;