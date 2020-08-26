import * as Sequelize from "sequelize"
import { db } from './index'

export interface UserParamsJSONB {
  password?: string
  refreshJWT?: string
}

export interface UserAttributes {
  id?: string
  name: string
  email: string
  paramsJSONB?: UserParamsJSONB
}

export interface UserCreationAttributes
  extends Sequelize.Optional<UserAttributes, "id"> {
}

export const UserFactory = () => {

  class User extends Sequelize.Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes {
    public id: string
    public name: string
    public email!: string
    public paramsJSONB?: UserParamsJSONB

    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    public static associations: {
      // define association here
    }
  }

  User.init(
    {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      paramsJSONB: {
        type: Sequelize.DataTypes.JSONB,
      }
    },
    {
      tableName: "Users",
      sequelize: db.sequelize,
    }
  )
}
