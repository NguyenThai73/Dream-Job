const { request } = require('express');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require("../controllers/User.controller");
const Employers = require("../controllers/Employers.controller");
const Careers = require("../controllers/Careers.controller");
const CareersEmployers = require("../controllers/CareersEmployers.controller");
const Jobs = require("../controllers/Jobs.controller");
const Recruitments = require("../controllers/Recruitments.controller");
const Messenger = require("../controllers/Messenger.controller");

router.post("/user/post", User.post);
router.get("/user/get", User.get);
router.get("/user/:id", User.getId);
router.get("/userUuid/:uuid", User.getUuid);
router.put("/user/put/:id", User.put);

router.post("/employer/post", Employers.post);
router.get("/employer/get", Employers.get);
router.get("/employer/:id", Employers.getId);

router.post("/career/post", Careers.post);
router.get("/career/get", Careers.get);
router.get("/career/:id", Careers.getId);

router.post("/careersEmployers/post", CareersEmployers.post);
router.get("/careersEmployers/get", CareersEmployers.get);
router.get("/careersEmployers/:id", CareersEmployers.getId);

router.post("/job/post", Jobs.post);
router.get("/job/get", Jobs.get);
router.get("/job/:id", Jobs.getId);

router.post("/recruitment/post", Recruitments.post);
router.get("/recruitment/get", Recruitments.get);
router.get("/recruitment/:id", Recruitments.getId);

router.post("/messenger/post", Messenger.post);
router.get("/messenger/get/:id", Messenger.get);
router.get("/messenger/:id", Messenger.getId);


module.exports = router;