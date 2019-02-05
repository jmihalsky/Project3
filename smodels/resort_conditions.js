module.exports = function(sequelize, DataTypes){
    var resort_conditions = sequelize.define("resort_conditions",{
        report_date: {
            type: DataTypes.DATE(6),
            allowNull: false,
            PrimaryKey: true
        },
        resort_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            PrimaryKey: true
        },
        new_snow: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        base_depth_min: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        base_depth_max: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cond: {
            type: DataTypes.STRING,
            allowNull: true
        },
        num_slopes_open: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        num_lifts_open: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });
    resort_conditions.removeAttribute('id');

    return resort_conditions;
};