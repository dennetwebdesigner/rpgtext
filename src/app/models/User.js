import { Model, DataTypes } from 'sequelize'
import bcrypt from 'bcrypt'

class User extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            password_hash: DataTypes.VIRTUAL,
            password: DataTypes.STRING,
        }, { sequelize })

        this.addHook('beforeSave', async(user) => {
            if (user.password_hash)
                user.password = await bcrypt.hash(user.password_hash, 8)
            return this
        })
    }

    async passwordCheck(password) {
        return await bcrypt.compare(password, this.password)
    }

    static associate(models) {
        this.hasMany(models.Character, { foreignKey: 'user_id', as: 'characters' })
    }

}

export default User