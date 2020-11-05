import Sequelize from 'sequelize'
import dbConfig from '../config/database'

const models = []

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(dbConfig)

        if (models) {
            models.map(model => model.init(this.connection))

            models.forEach(model => {
                if (model.associate)
                    model.associate(this.connection.models)
            })
        }
    }
}

export default new Database()