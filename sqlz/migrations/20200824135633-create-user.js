'use strict'

const {DataTypes} = require( 'sequelize' )

module.exports = {
  up: async ( queryInterface, Sequelize ) => {
    await queryInterface.createTable( 'Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal( 'uuid_generate_v4()' ),
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      paramsJSONB: {
        type: Sequelize.DataTypes.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    } )
  },
  down: async ( queryInterface, Sequelize ) => {
    await queryInterface.dropTable( 'Users' )
  }
}

