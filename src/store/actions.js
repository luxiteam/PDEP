import request from '~/service'
const api = "http://59.202.28.203"

//登陆
export const login = (store, params) => {
    return request.get(`${api}/PDE/login`, params)
}

//用户信息
export const checkUser = (store, params) => {
    return request.get(`${api}/PDE/permission/userMessage`, params)
}

//用户权限
export const displayPermissions = (store, params) => {
    return request.get(`${api}/PDE/permission/displayPermissions`, params)
}

//退出
export const logout = (store, params) => {
    return request.get(`${api}/PDE/logOut`, params)
}

//三级部门菜单
export const deptMenu = (store, params) => {
    return request.get(`${api}/PDE/monitor/monitorsta/deptMenu`, params)
}

//三级部门菜单
export const header = (store, params) => {
    return request.get(`${api}/PDE/monitor/monitorsta/header`, params)
}