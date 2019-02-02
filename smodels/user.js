var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes){
    var usr = sequelize.define("usr",{
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
        },
        pword: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });
    usr.removeAttribute('id');

    usr.prototype.validPassword = function(pword){
        return bcrypt.compareSync(pword, this.pword);
    };

    usr.hook("beforeCreate",function(usr){
        usr.pword = bcrypt.hashSync(usr.pword, bcrypt.genSaltSync(10),null);
    });
    
    return usr;
};