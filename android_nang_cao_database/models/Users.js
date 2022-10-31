module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        uuid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
        },
        sdt: {
            type: DataTypes.STRING(12),
        },
        gender: {
            type: DataTypes.INTEGER,
        },
        idCardNo: {
            type: DataTypes.STRING(30),
        },
        addRess: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.BLOB,
        },
        cv: {
            type: DataTypes.BLOB,
        },
        height: {
            type: DataTypes.INTEGER,
        },
        weight: {
            type: DataTypes.INTEGER,
        },
        hobby: {
            type: DataTypes.STRING,
        },
        personality: {
            type: DataTypes.STRING,
        },//tính cách
        educational: {
            type: DataTypes.STRING,
        },
        career: {
            type: DataTypes.STRING,
        },//ngành nghề
        wish: {
            type: DataTypes.STRING,
        },
        salary: {
            type: DataTypes.STRING(15),
        },
        exp: {
            type: DataTypes.STRING,
        },
        jobNow: {
            type: DataTypes.STRING,
        },
        recruitments: {
            type: DataTypes.STRING,
        },
        currentWorkingAddress: {
            type: DataTypes.STRING,
        },
        currentEmploymentCompany: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: true,
            underscrored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    return Users;
};