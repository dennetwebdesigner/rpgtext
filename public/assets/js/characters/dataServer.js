import { api, errorApi } from '../helpers.js'

const id = window.localStorage.getItem('id')

export const allMyChars = async() => {
    const response = await api('get', `/users/${id}`)
    return response.characters
}

export const createNewCharacter = async(name, message) => {
    const response = await api('post', `/characters/${ id }
    `, { name })

    if (!(errorApi(response.error, 'name has used!', 'Este nome já esta em uso', message))) {
        return false
    }

    return true
}