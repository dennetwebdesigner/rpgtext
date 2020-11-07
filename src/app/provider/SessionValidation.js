import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import authConfig from '../../config/auth.js'

export default async(authHeader, id) => {
    const [, token] = authHeader.split(' ')
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)
    console.log(decoded.id, id)

    if (decoded.id == id) return true

    return false
}