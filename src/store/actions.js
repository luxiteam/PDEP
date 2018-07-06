import request from '~/service'

// const api = "http://192.168.137.1"
const api = "http://59.202.28.203"

/*监控统计*/
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

//接入规模、交换总量、当日交换量
export const monitorHeader = (store, params) => {
    return request.get(`${api}/PDE/monitor/monitorsta/header`, params)
}

/*业务域监控*/
//三级业务菜单
export const bscodeMenu = (store, params) => {
    return request.get(`${api}/PDE/monitor/bscodemonitor/bscodeMenu`, params)
}

//接入规模、交换总量、当日交换量
export const businessHeader = (store, params) => {
    return request.get(`${api}/PDE/monitor/bscodemonitor/header`, params)
}


/*部门/区划详情*/
//监控状态
export const monitorStatus = (store, params) => {
    return request.get(`${api}/PDE/monitor/detail/status`, params)
}

//监控详情
export const monitorDetail = (store, params) => {
    return request.get(`${api}/PDE/monitor/detail/monitor`, params)
}

//发送监控
export const sendMonitor = (store, params) => {
    return request.get(`${api}/PDE/monitor/detail/send`, params)
}

//接收监控
export const reciveMonitor = (store, params) => {
    return request.get(`${api}/PDE/monitor/detail/recive`, params)
}

export const trackBscodeMenu = (store, params) => {
    return request.get(`${api}/PDE/track/report/bscodeMenu`, params)
}

export const todayExNumSrc = (store, params) => {
    return request.get(`${api}/PDE/track/report/todayExNumSrc`, params)
}

export const todayExNumTar = (store, params) => {
  return request.get(`${api}/PDE/track/report/todayExNumTar`, params)
}

export const pandectTable = (store, params) => {
    return request.get(`${api}/PDE/track/report/pandectTable`, params)
}

export const pandectDetail = (store, params) => {
    return request.get(`${api}/PDE/track/report/pandectDetail`, params)
}
