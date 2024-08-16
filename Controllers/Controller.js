import Edunova from "../Models/Model.js";

export const memberReg = async (req, res) => {
  try {
    const { name, email, profilePicture, role, status, teams } = req.body;
    console.log(name, email, profilePicture);

    const member = await Edunova.create({
      name,
      email,
      profilePicture, // URL of the profile picture
      status: status === 'active', // Convert status to boolean
      role,
      teams: teams ? teams.split(',') : [] // Convert teams to array if provided
    });

    console.log('Member created:', member);

    res.status(201).json({
      success: true,
      message: 'Member registered successfully',
      member
    });
  } catch (error) {
    console.error('Error registering member:', error);

    res.status(500).json({
      success: false,
      message: 'Error registering member'
    });
  }
};
