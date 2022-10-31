const db = require('../models');
const Messenger = db.Messenger;
const Jobs = db.Jobs;
const CareersEmployers = db.CareersEmployers;
const Employers = db.Employers;
exports.post = async (require, respon) => {
    const messenger = await Messenger.create(require.body);
    return respon.status(200).json(messenger.dataValues.id)
};
exports.get = async (require, res) => {
    const messenger = await Messenger.findAll({ where: { user_id: require.params.id } });
    const respon = messenger.map(item => item.dataValues);
    var respon1 = [];
    for (let i = respon.length-1; i >=0; i--) {
        var jobs = await Jobs.findOne({ where: { id: respon[i]['job_id'] } });
        var careersEmployers = await CareersEmployers.findOne({ where: { id: jobs['careersEmployersId'] } });
        var employer = await Employers.findOne({ where: { id: careersEmployers['employer_id'] } });
        var item = {
            "id": respon[i].id,
            "user_id": respon[i].user_id,
            "jobId": jobs['id'],
            "jobsName": jobs['name'],
            "employerId": employer['id'],
            "employerName": employer['name'],
            "content": respon[i].content,
            "to": respon[i].to,
            "status": respon[i].status,
            "timeSend": respon[i].timeSend
        };
        respon1.push(item);
    }
    return res.status(200).json(respon1);
}

exports.getId = async (require, res) => {
    const employer = await Messenger.findOne({ where: { user_id: require.params.id } });
    return res.status(200).json(employer);
}