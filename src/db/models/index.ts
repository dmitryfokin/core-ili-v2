import * as Sequelize from "sequelize"

import { UserAttributes, UserCreationAttributes, UserFactory } from './user'

type dbType = {
  sequelize?: Sequelize.Sequelize
  User?: Sequelize.ModelDefined<UserAttributes, UserCreationAttributes>
}

export const db: dbType = {}

export const dbInit = ( configSequelize: any ) => {
  db.sequelize = new Sequelize.Sequelize( configSequelize.url, configSequelize )

  UserFactory()
  db.User = db.sequelize.models.User

  //  Object.keys( db ).forEach( modelName => {
  //   if ( db[modelName].associate ) {
  //     db[modelName].associate( db )
  //   }
  // } )
}
