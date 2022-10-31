module.exports = (sequelize, DataTypes) => {
    const Jobs = sequelize.define("Jobs", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        careersEmployersId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        qty: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        salary: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        age: {
            type: DataTypes.STRING(3),
            allowNull: false
        },
        englishLevel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        exp: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        otherRequirements: {
            type: DataTypes.STRING(3000),
        },
        classify: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.INTEGER,
        }
    },
    );

    return Jobs;
};