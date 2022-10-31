// const User = require('../Users');
// const Employers = require('../Employers');
// const Careers = require('../Careers');
// const Jobs = require('../Jobs');
// const CareersEmployers = require('../CareersEmployers');

module.exports = (db) => {
    const {
        Users, Employers, Careers, Jobs, CareersEmployers, Recruitments, Messenger
    } = db;

    // Users  with Recruitments
    Users.hasOne(Recruitments, { foreignKey: 'user_id' });
    // Users  with Recruitments
    Jobs.hasOne(Recruitments, { foreignKey: 'job_id' });
    // Employers with CareersEmployers
    Employers.hasOne(CareersEmployers, { foreignKey: 'employer_id' });
    // Careers with CareersEmployers
    Careers.hasOne(CareersEmployers, { foreignKey: 'career_id' });
    // Jobs with CareersEmployers
    CareersEmployers.hasMany(Jobs, { foreignKey: 'careersEmployersId' });
    // Jobs.belongsTo(CareersEmployers, );
    Users.hasOne(Messenger, { foreignKey: 'user_id' });
    Jobs.hasOne(Messenger, { foreignKey: 'job_id' });


}