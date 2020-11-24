import {API} from "../../../config";

export const register = user  => {
    let url = `${API}/signup`;
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(err => err)
}

export const signin = ({ email, password })  => {
    let url = `${API}/signin`;
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
        .then(res => res.json())
        .catch(err => err)
}
