import User from '../models/User'
import sessionValidate from '../provider/SessionValidation'

class UserController {

    async index(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }

    async show(req, res) {
        const { id } = req.params
        const authHeader = req.headers.authorization

        if (!(await sessionValidate(authHeader, id)))
            return res.json({ error: 'token not is valed' })

        try {
            const user = await User.findOne({
                where: { id },
                include: [{
                    association: 'characters',
                    attributes: ['id', 'name', 'level']
                }]
            })

            if (!user) return res.status(400).json({ error: 'User not found' })

            return res.json(user)
        } catch (err) {
            return res.status(500).json({ error: 'server error' })
        }
    }

    async store(req, res) {
        const { username, password } = req.body

        const hasUsers = await User.findOne({
            where: { username },
            attributes: ['id']
        })

        if (hasUsers) return res.json({ error: 'username has registred!' })

        const user = await User.create({ username, password_hash: password })

        return res.json(user)
    }

}

export default new UserController()