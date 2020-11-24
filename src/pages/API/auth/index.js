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

export const authenticate = (data, next) => {
    if(typeof window !== "undefined"){
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

export const signout = next => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next()
        return fetch(`${API}/signout`, {
            method: "GET"
        }).then(res => {
            console.log("Signout", res)
        }).catch(err => console.log(err))
    }
}
