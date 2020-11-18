'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('enemies', [{
                name: 'enemy-test',
                life: '60',
                level: '1',
                xp: '8',
                min_attack: '3',
                max_attack: '5',
                hit: '40',
                critical: '15',
                critical_hit: '2',
                agility: '6',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
                updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            {
                name: 'enemy-second',
                life: '100',
                level: '2',
                xp: '15',
                min_attack: '6',
                max_attack: '9',
                hit: '43',
                critical: '17',
                critical_hit: '3',
                agility: '5',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
                updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            {
                name: 'enemy-last',
                life: '60',
                level: '1',
                xp: '19',
                min_attack: '8',
                max_attack: '14',
                hit: '47',
                critical: '20',
                critical_hit: '4',
                agility: '4.3',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
                updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        ], {})

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('enemies', null, {})
    }
};