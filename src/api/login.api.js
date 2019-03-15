import axios from './config'

/**
 *
 *
 * @param {*} data
 * @returns
 */
export const getUser = (data) => {
    return axios({
        url: 'https://gateway.rheafin.com/crm/api/v1/userauth/login/',
        data: data,
        method: 'post'
    })
}

export const create = (data) => {
    return axios({
        url: 'register/v1/userauth/register/',
        data: data,
        method: 'post'
    })
}
export const getPassWord = (data) => {
    return axios({
        url: 'register/v1/userauth/register/',
        data: data,
        method: 'post'
    })
}