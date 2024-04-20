const express = require('express');
const router = express.Router();
const teamController = require('../Controllers/teamController');

router.post('/create', teamController.createTeam);
router.get('/search', teamController.searchUser);
router.put('/add-member', teamController.addMember);

module.exports = router;
