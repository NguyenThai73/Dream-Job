const db = require('../models');
const Users = db.Users;
exports.post = async (require, respon) => {
    // const user = {}
    const user = await Users.create(require.body);
    console.log(user);
    return respon.status(200).json({
        success: true,
        content: user.dataValues.id
    })
};
exports.get = async (require, res) => {
    const users = await Users.findAll({
    });
    const respon = users.map(item => item.dataValues);
    return res.status(200).json(respon);
}
exports.getId = async (require, res) => {
    console.log(require.params.id);
    const user = await Users.findOne({ where: { id: require.params.id } });
    return res.status(200).json(user)
}
exports.getUuid = async (require, res) => {
    console.log(require.body.uuid);
    const users = await Users.findOne({
        where: { uuid: require.params.uuid },
    });
    // const respon = users.map(item => item.dataValues);
    return res.status(200).json(users);
}

exports.put = async (req, res) => {
    // console.log(aloo);
    console.log(req.body);
    console.log(req.params.id);
    let user = await Users.update(req.body, { where: { id: req.params.id } });
    return res.status(200).json(true)
}