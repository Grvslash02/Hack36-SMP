const Team = require('../Models/TeamModel');
const User = require('../Models/userModel');

exports.createTeam = async (req, res) => {
    try {
        const { createdBy, members } = req.body;
        const team = await Team.create({ createdBy, members });
        res.status(201).json({ status: 'success', data: { team } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.searchUser = async (req, res) => {
    try {
        const { searchTeam } = req.body;
        // Search for users in UserModel based on the searchTerm
        const users = await User.find({ username: { $regex: searchTeam, $options: 'i' } });
        res.status(200).json({ status: 'success', data: { users } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.addMember = async (req, res) => {
    try {
        const { teamId, memberId } = req.body;
        // Find the team by ID
        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ status: 'fail', message: 'Team not found' });
        }
        // Check if the member ID exists in the team's members array
        if (team.members.includes(memberId)) {
            return res.status(400).json({ status: 'fail', message: 'Member already exists in the team' });
        }
        // Add the member to the team's members array
        team.members.push(memberId);
        await team.save();
        res.status(200).json({ status: 'success', data: { team } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};
