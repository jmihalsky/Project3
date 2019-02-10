module.exports = function(sequelize, DataTypes){
    var resort_temp = sequelize.define("resort_temp",{
        tmp_resort_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tmp_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tmp_web: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tmp_lat: {
            type: DataTypes.DECIMAL(10,8),
            allowNull: true
        },
        tmp_lon: {
            type: DataTypes.DECIMAL(10,8),
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });

    resort_temp.removeAttribute("id");

    return resort_temp;
}