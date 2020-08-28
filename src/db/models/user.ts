import * as Sequelize from "sequelize"
import { db } from './index'

export interface UserParamsJSONB {
  password?: string
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

export interface IUserType
  extends Sequelize.Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
}

export interface IUserDefineType
  extends Sequelize.ModelDefined<UserAttributes, UserCreationAttributes> {
}

class User
  extends Sequelize.Model<UserAttributes, UserCreationAttributes>
  implements IUserType {
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

export const UserFactory = () => {
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
        set( val: object ) {
          this.setDataValue( 'paramsJSONB', {...this.paramsJSONB, ...val} )
        }
      }
    },
    {
      tableName: "Users",
      sequelize: db.sequelize,
    }
  )
}
