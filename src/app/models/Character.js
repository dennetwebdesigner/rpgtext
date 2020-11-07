import { Model, DataTypes } from 'sequelize'

class Character extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
            life: DataTypes.STRING,
            level: DataTypes.STRING,
            xp_current: DataTypes.STRING,
            min_attack: DataTypes.STRING,
            max_attack: DataTypes.STRING,
            hit: DataTypes.STRING,
            critical: DataTypes.STRING,
            critical_hit: DataTypes.STRING,
            agility: DataTypes.STRING,
        }, { sequelize })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }
}

export default Character