import jwt from 'jsonwebtoken'
import User from '../models/User'
import authConfig from '../../config/auth'

class SessionsController {
    async create(req, res) {
        const { username, password } = req.body

        if (!username, !password) return res.status(400).json({ error: 'validation error' })

        try {
            const user = await User.findOne({ where: { username }, attributes: ['id', 'password'] })

            if (!user) return res.json({ error: 'user not has found' })

            if (!(await user.passwordCheck(password)))
                return res.json({ error: 'password invalid' })

            const { id } = user

            return res.json({
                user: id,
                token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expiresIn })
            })

        } catch (error) {
            return res.status(500).json({ error })
        }



    }
}

export default new SessionsController()