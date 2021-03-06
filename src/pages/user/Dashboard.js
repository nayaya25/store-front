import Layout from "../Layouts/layout";
import {isAuthenticated} from "../../utilities";
import {Link} from "react-router-dom";

const Dashboard = () => {

    const {user: {_id, name, email, role}} = isAuthenticated()

    const userLinks = () => {
        return (
            <div className='card'>
                <h4 className='card-header'>User Links</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link to='/cart'>My Cart</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link to='/profile/update'>Edit Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const userInfo = () => (
        <div className='card mb-5'>
            <h3 className='card-header'>User Information</h3>
            <ul className='list-group'>
                <li className='list-group-item'>{name}</li>
                <li className='list-group-item'>{email}</li>
                <li className='list-group-item'>{role === 1 ? "Admin" : "User"}</li>
            </ul>
        </div>
    )
    const historyInfo = () => (
        <div className='card mb-5'>
            <h3 className='card-header'>Purchase History</h3>
            <ul className='list-group'>
                <li className='list-group-item'>
                    History
                </li>
            </ul>
        </div>
    )
    return (
        <Layout title='Dashboard' description='User Dashboard' className='container'>
            <div className='row'>
                <div className='col-3'>
                    {userLinks()}
                </div>
                <div className='col-9'>
                    {userInfo()}
                    {historyInfo()}
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;