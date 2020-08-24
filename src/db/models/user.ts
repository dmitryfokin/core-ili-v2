import {
  Model,
  Optional,
} from "sequelize"

export const UserFactory = ( sequelize, DataTypes ) => {

  interface UserParamsJSONB {
    password?: string
    refreshJWT?: string
  }

  interface UserAttributes {
    id?: string
    name: string
    email: string
    paramsJSONB?: UserParamsJSONB
  }

  interface UserCreationAttributes extends Optional<UserAttributes, "id"> {
  }

  class User extends Model<UserAttributes, UserCreationAttributes>
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
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      paramsJSONB: {
        type: new DataTypes.JSONB,
      }
    },
    {
      tableName: "Users",
      sequelize,
    }
  )

  return User
}

