import { baseUrl } from './helpers.js'
const token = window.localStorage.getItem('token')

export const hasAuth = async(errorValidate = '') => {
    if (!token || errorValidate) window.location.href = baseUrl
}