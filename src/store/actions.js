import request from '~/service'

// const api = "http://192.168.137.1"
const api = "http://59.202.28.203"

export const login = (store, params) => {
    return request.get(`${api}/PDE/login`, params)
}

export const checkUser = (store, params) => {
    return request.get(`${api}/PDE/permission/userMessage`, params)
}

export const bscodeMenu = (store, params) => {
  return request.get(`${api}/PDE/track/report/bscodeMenu`, params)
}

export const todayExNumSrc = (store, params) => {
  return request.get(`${api}/PDE/track/report/todayExNumSrc`,params)
}

export const pandectTable = (store, params) => {
  return request.get(`${api}/PDE/track/report/pandectTable`,params)
}

export const exportTable = (store, params) => {
  return request.get(`${api}/PDE/track/report/exportTable`,params)
}



