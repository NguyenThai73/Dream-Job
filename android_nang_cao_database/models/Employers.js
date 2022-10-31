module.exports = (sequelize, DataTypes) => {
    const Employers = sequelize.define("Employers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        addRess: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        sdt: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        career: {
            type: DataTypes.STRING,
            allowNull: false
        },
        scale: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        introduce: {
            type: DataTypes.STRING(3000),
            allowNull: false
        }

    },
        {
            timestamps: true,
            underscrored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    return Employers;
};