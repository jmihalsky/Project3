module.exports = function(sequelize, DataTypes){
    var user_reports = sequelize.define("user_reports",{
        cond_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        resort_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        report_date: {
            type: DataTypes.DATE(6),
            allowNull: true
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
        cond: {
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

    user_reports.removeAttribute("id");

    return user_reports;
};