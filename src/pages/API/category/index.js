import {API} from "../../../config";

export const createCategory = (userId, token, category)  => {

    let url = `${API}/category/create/${userId}`;
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(res => res.json())
        .catch(err => err)
}