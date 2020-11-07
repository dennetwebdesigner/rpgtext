export const baseUrl = 'http://localhost:3000'

export const imgsServer = `${baseUrl}/static`

export const errorApi = (error, type, message, element) => {
    if (error === type) {
        element.textContent = message
        return false
    } else return true
}

export const api = async(method, url, data = '') => {

    let headers

    if (window.localStorage.getItem('token')) {
        const Authorization = `Bearer ${window.localStorage.getItem('token')}`

        headers = {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization,
        }
    } else {
        headers = {
            Accept: 'application/json',
            'Content-type': 'application/json',
        }
    }


    let content = {
        method: method,
        headers
    }

    if (method === 'post' || method === 'POST') content.body = JSON.stringify(data)

    const response = await fetch(`${baseUrl}/api${url}`, content)

    return response.json()

}