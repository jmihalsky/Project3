module.exports = function(sequelize, DataTypes){
    var resorts = sequelize.define("resorts",{
        resort_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            PrimaryKey: true
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
            type: DataTypes.DECIMAL(10,8),
            allowNull: true 
        },
        lon: {
            type: DataTypes.DECIMAL(10,8),
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
        num_slopes_open: {
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
        }

    },
    {
        timestamps: false,
        freezeTableName: true
    });

    resorts.removeAttribute("id");

    return resorts;
};