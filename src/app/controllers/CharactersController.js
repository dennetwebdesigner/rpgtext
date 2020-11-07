import Character from '../models/Character'
import baseAttributes from '../../config/charactersAttributesBase'

class CharactersController {

    async index(req, res) {}
    async show(req, res) {}
    async store(req, res) {
        const { user_id } = req.params
        const { name } = req.body


        try {
            const hasCharacter = await Character.findOne({
                where: { name },
                attributes: ['id']
            })

            if (hasCharacter)
                return res.status(401).json({ error: 'name has used!' })

            const newCharacter = {...baseAttributes, name, user_id }

            const character = await Character.create(newCharacter)
            return res.json(character)
        } catch (error) {
            return res.status(500).json({})
        }



    }
    async destroy(req, res) {}

}

export default new CharactersController()