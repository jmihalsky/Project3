var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes){
    var user = sequelize.define("user",{
        user_id: {
            type: DataTypes.INTEGER,
            PrimaryKey: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
        pword: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });
    user.removeAttribute('id');

    user.prototype.validPassword = function(pword){
        return bcrypt.compareSync(pword, this.pword);
    };

    user.hook("beforeCreate",function(user){
        user.pword = bcrypt.hashSync(user.pword, bcrypt.genSaltSync(10),null);
    });
    
    return user;
};