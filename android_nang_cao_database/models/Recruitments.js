// import Users
module.exports = (sequelize, DataTypes) => {
    const Recruitments = sequelize.define("Recruitments", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        job_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        applyDate: {
            type: DataTypes.DATE,
        },
        qty: {
            type: DataTypes.INTEGER,
        },
        applyNote: {
            type: DataTypes.STRING,
        },
        des: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.INTEGER,
        },
        apply: {
            type: DataTypes.INTEGER,
        },

    },
    );

    return Recruitments;
};