import {API} from "../../../config";

export const createProduct = (userId, token, product)  => {
    console.log(JSON.stringify(product))
    let url = `${API}/product/create/${userId}`;
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
        .catch(err => err)
}
