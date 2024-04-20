const express = require('express');
const router = express.Router();
const teamController = require('../Controllers/teamController');

router.post('/create', teamController.createTeam);
router.post('/search', teamController.searchUser);
router.post('/add-member', teamController.addMember);

module.exports = router;
