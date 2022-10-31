const db = require('../models');
const CareersEmployers = db.CareersEmployers;
exports.post = async (require, respon) => {
    const item = await CareersEmployers.create(require.body);
    return respon.status(200).json(item.dataValues.id)
};
exports.get = async (require, res) => {
    const careersEmployers = await CareersEmployers.findAll({
    });
    const respon = careersEmployers.map(item => item.dataValues);
    return res.status(200).json(respon);
}

exports.getId = async (require, res) => {
    console.log(require.params.id);
    const item = await CareersEmployers.findOne({ where: { id: require.params.id} });
    return res.status(200).json(item);
}