import * as Sequelize from "sequelize"
import {
  UserFactory,
  IUserDefineType,
} from './user'

type dbType = {
  sequelize?: Sequelize.Sequelize
  User?: IUserDefineType
}

export const db: dbType = {}

export const dbInit = ( configSequelize: any ) => {
  db.sequelize = new Sequelize.Sequelize( configSequelize.url, configSequelize )

  UserFactory()
  db.User = db.sequelize.models.User

  // TODO: инициализация ассоциаций
}
