const express = require('express');
const teamRouter = express.Router();
const teamController = require('../controllers/teamController');

teamRouter.post('/create', teamController.createTeam);
teamRouter.get('/search', teamController.searchUser);
teamRouter.put('/add-member', teamController.addMember);

module.exports = teamRouter;
