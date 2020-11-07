'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('characters', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                AllowNUll: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            life: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            level: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            xp_current: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            min_attack: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            max_attack: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            hit: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            critical: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            critical_hit: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            agility: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('characters');
    }
};