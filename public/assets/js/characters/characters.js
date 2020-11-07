import { api } from '../helpers.js'


const listar = async() => {

    const id = window.localStorage.getItem('id')
    const response = await api('get', `/users/${id}`)
    console.log(response)
}

listar()