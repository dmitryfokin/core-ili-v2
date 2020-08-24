import {
  Sequelize,
  DataTypes,
} from "sequelize"

import { UserFactory } from './user'

export const sequelizeInit = ( configSequelize: any ) => {

  const sequelize = new Sequelize( configSequelize.url, configSequelize )

  const db = {
    sequelize,
    Sequelize,
    User: UserFactory( sequelize, DataTypes ),
  }

  Object.keys( db ).forEach( modelName => {
    if ( db[modelName].associate ) {
      db[modelName].associate( db )
    }
  } )

  return db
}
