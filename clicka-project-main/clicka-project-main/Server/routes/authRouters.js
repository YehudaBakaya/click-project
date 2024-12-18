const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

const { SignUpUser, SignUpUserToken, postProfileDetailes, getProfileDetails } = require("../controllers/outhController");



router.post("/singUpUser", SignUpUser);
router.post("/SignUpUserToken", SignUpUserToken);
router.post("/profileDetails", authMiddleware, postProfileDetailes)
router.get("/profileDetails/:userId",authMiddleware, getProfileDetails)

module.exports = router;
