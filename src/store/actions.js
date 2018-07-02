import request from '~/service'
const api = "http://59.202.28.203"
export const login = (store, params) => {
    return request.get(`${api}/PDE/login`, params)
}

export const checkUser = (store, params) => {
    return request.get(`${api}/PDE/permission/userMessage`, params)
}