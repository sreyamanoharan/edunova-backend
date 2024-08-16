import Edunova from "../Models/Model.js";

export const memberReg = async (req, res) => {
  try {
    const { name, email, profilePicture, role, status, teams } = req.body;

    const formattedTeams = Array.isArray(teams) ? teams : [];

    const Member = await Edunova.create({
      name,
      email,
      profilePicture,
      role,
      status,
      teams: formattedTeams
    });

    res.status(201).json({
      success: true,
      message: 'Member registered successfully',
      Member
    });
  } catch (error) {
    console.error('Error registering member:', error);

    res.status(500).json({
      success: false,
      message: 'Error registering member',
      error: error.message 
    });
  }
};


export const allMembers=async(req,res)=>{
  try { 
    const Members=await Edunova.find()
    res.status(200).json({Members}) 
  } catch (error) {
    console.log(error);
  }
}

export const getMember=async(req,res)=>{
  try {
    const member=await Edunova.findOne({})
  } catch (error) {
    
  }
}

