const arrangeUserArray = (users)=>{
    const userArray = [
        { type: "admins", names: [] },
        { type: "organizers", names: [] },
        { type: "umpires", names: [] },
        { type: "table_organizers", names: [] },
      ]
    
      users.map ((user)=>{
        user.role.includes('admin') && userArray[0].names.push(user)
        user.role.includes('organizer') && userArray[1].names.push(user)
        user.role.includes('umpire') && userArray[2].names.push(user)
        user.role.includes('tableOrganizer') && userArray[3].names.push(user)
      })

      console.log("Rearranged user array: ", userArray)
      return userArray
}

module.exports = {
    arrangeUserArray
}
    