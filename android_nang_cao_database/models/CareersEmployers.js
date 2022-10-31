
module.exports = (sequelize, DataTypes) => {
    const CareersEmployers = sequelize.define("CareersEmployers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        career_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        employer_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    );

    return CareersEmployers;
};