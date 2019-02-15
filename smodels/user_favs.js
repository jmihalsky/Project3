module.exports = function(sequelize, DataTypes){
    var user_favs = sequelize.define("user_favs",{
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        resort_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });

    user_favs.removeAttribute("id");

    return user_favs;
};