const db = require('../models');
const Employers = db.Employers;
exports.post = async (require, respon) => {
    const employer = await Employers.create(require.body);
    return respon.status(200).json(employer.dataValues.id)
};
exports.get = async (require, res) => {
    const umployers = await Employers.findAll({
    });
    const respon = umployers.map(item => item.dataValues);
    return res.status(200).json(respon);
}

exports.getId = async (require, res) => {
    console.log(require.params.id);
    const employer = await Employers.findOne({ where: { id: require.params.id} });
    return res.status(200).json(employer);
}