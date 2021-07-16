const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw)
    {
        return bcrypt.compare(loginPw, this.password);
    }
}

//define table columns and configurations

User.init(
    {
        //table column defination
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
            defaultValue: DataTypes.UUIDV4,
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // define an email column
        email: {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true,
            validate : {
                isEmail : true
            }
        },
        // define a password column
        password: {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len : [4]
            }
        }
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
            //table configuration options
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'User',
            tableName: "users"
    }
);

module.exports = User;
