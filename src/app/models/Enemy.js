import { Model, DataTypes } from 'sequelize'

class Enemy extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            life: DataTypes.STRING,
            level: DataTypes.STRING,
            xp: DataTypes.STRING,
            min_attack: DataTypes.STRING,
            max_attack: DataTypes.STRING,
            hit: DataTypes.STRING,
            critical: DataTypes.STRING,
            critical_hit: DataTypes.STRING,
            agility: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'enemies'
        })
    }
}

export default Enemy