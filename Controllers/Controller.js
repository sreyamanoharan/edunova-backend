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

export const deleteMember = async (req, res) => {
  try {
    const memberId = req.params.id;
    
    await Edunova.findByIdAndDelete(memberId); 
    res.status(200).json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete member' });
  }
};

// export const UpdateMember=async(req,res)=>{
//   const { id } = req.params;
//   const { name, email, role, status, teams, profilePicture } = req.body;
//   try {
   
//     console.log(memberId,'uuuuuuuuuuuuuu');
    

//     const updatedMember = await Edunova.findByIdAndUpdate(memberId, updateData, {
//       new: true, 
//       runValidators: true, 
//     });

//     if (!updatedMember) {
//       return res.status(404).json({ message: 'Member not found' });
//     }

//     res.json({ message: 'Member updated successfully', member: updatedMember });
//   } catch (error) {
//     console.error('Error updating member:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }


export const UpdateMember= async (req, res) => {
  console.log('hi hereeeee');
  
  const { id } = req.params;
  const { name, email, role, status, teams, profilePicture } = req.body;
  console.log(req.body,'pppppppppppppppppppppppqqqqqqqqqqqqq');
  

  try {
    const updatedUser = await Edunova.findByIdAndUpdate(
      id,
      {
        name,
        email,
        role,
        status,
        teams,
        profilePicture
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error' });
  }

}