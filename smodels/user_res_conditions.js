module.exports = function(sequelize, DataTypes){
    var user_res_conditions = sequelize.define("user_res_conditions",{
        cond_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            PrimaryKey: true
        },
        resort_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        report_date: {
            type: DataTypes.DATE(6),
            allowNull: false
        },
        new_snow: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        temp: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lft_lines: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cond_notes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });
    user_res_conditions.removeAttribute("id");

    return user_res_conditions;
};