const db = require('../models');
const Recruitments = db.Recruitments;
const Jobs = db.Jobs;
exports.post = async (require, respon) => {
    const item = await Recruitments.create(require.body);
    return respon.status(200).json(item.dataValues.id)
};
exports.get = async (require, res) => {
    const recruitments = await Recruitments.findAll({});
    var respon = [];
    for (let i = 0; i < recruitments.length; i++) {
        var jobs = await Jobs.findOne({ where: { id: recruitments[i]['job_id'] } });
        var item = {
            "id": recruitments[i].id,
            "user_id": recruitments[i].user_id,
            "jobs": jobs,
            "status": recruitments[i].status,
            "apply": recruitments[i].apply,
            "qty": recruitments[i].qty,
            "applyNote": recruitments[i].applyNote,
            "applyDate": recruitments[i].applyDate,
            "qty": recruitments[i].qty,
            "des": recruitments[i].des
        };
        respon.push(item);
    }
    return res.status(200).json(respon);
}

exports.getId = async (require, res) => {
    console.log(require.params.id);
    const item = await Recruitments.findAll({ where: { user_id: require.params.id } });

    return res.status(200).json(item);
}

// exports.put = async (req, res) => {
//     console.log(req.body);
//     console.log(req.params.id);
//     let recruitment = await Recruitments.update(req.body, { where: { id: req.params.id } });
//     return res.status(200).json(true)
// }

exports.post = async (require, respon) => {
    const recruitment = await Recruitments.create(require.body);
    console.log(recruitment);
    return respon.status(200).json(recruitment.dataValues.id)
};