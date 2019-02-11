module.exports = function(sequelize, DataTypes){
    var resort_weather = sequelize.define("resort_weather",{
        resort_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        resort_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resort_region: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true
        },
        postal_code: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        lat: {
            type: DataTypes.DECIMAL(15,12),
            allowNull: true 
        },
        lon: {
            type: DataTypes.DECIMAL(15,12),
            allowNull: true 
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        num_slopes: {
            type: DataTypes.INTEGER,
            allowNull: true 
        },
        web_link: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        map_link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        report_date: {
            type: DataTypes.DATE(6),
            allowNull: false
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

    resort_weather.removeAttribute('id');

    return resort_weather;
};