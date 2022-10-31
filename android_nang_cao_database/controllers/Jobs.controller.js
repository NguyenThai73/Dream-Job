const db = require('../models');
const Jobs = db.Jobs;
const CareersEmployers = db.CareersEmployers;
const Employers = db.Employers;
const Careers = db.Careers;
exports.post = async (require, respon) => {
    const job = await Jobs.create(require.body);
    return respon.status(200).json(job.dataValues.id)
};
exports.get = async (require, res) => {
    var jobs = await Jobs.findAll({});
    var respon = [];
    for (let i = 0; i < jobs.length; i++) {
        var careersEmployers = await CareersEmployers.findOne({
            where: { id: jobs[i]['careersEmployersId'] }
        });
        var employer = await Employers.findOne({ where: { id: careersEmployers['employer_id'] } });
        var career = await Careers.findOne({ where: { id: careersEmployers['career_id'] } });
        var item = {
            "id": jobs[i].id,
            "careersEmployersId": jobs[i].CareersEmployers,
            "employerName": employer,
            "careerName": career,
            "name": jobs[i].name,
            "qty": jobs[i].qty,
            "salary": jobs[i].salary,
            "age": jobs[i].age,
            "englishLevel": jobs[i].englishLevel,
            "exp": jobs[i].exp,
            "expirationDate": jobs[i].expirationDate,
            "otherRequirements": jobs[i].otherRequirements,
            "classify": jobs[i].classify,
            "status": jobs[i].status
        };
        respon.push(item);
    }
    return res.status(200).json(respon);
}

exports.getId = async (require, res) => {
    console.log(require.params.id);
    const job = await Jobs.findOne({ where: { id: require.params.id } });

    var careersEmployers = await CareersEmployers.findOne({
        where: { id: job['careersEmployersId'] }
    });
    // console.log();
    var employer = await Employers.findOne({ where: { id: careersEmployers['employer_id'] } });
    var career = await Careers.findOne({ where: { id: careersEmployers['career_id'] } });
    var item = {
        "id": job.id,
        "careersEmployersId": job.CareersEmployers,
        "employerName": employer,
        "careerName": career,
        "name": job.name,
        "qty": job.qty,
        "salary": job.salary,
        "age": job.age,
        "englishLevel": job.englishLevel,
        "exp": job.exp,
        "expirationDate": job.expirationDate,
        "otherRequirements": job.otherRequirements,
        "classify": job.classify,
        "status": job.status
    };
    return res.status(200).json(item);
}