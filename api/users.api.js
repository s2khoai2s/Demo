const {
    save,
    getAll,
    getById,
    deleteById,
    updateById,
  } = require("../mongodb/users.dao");
  
  const createUser = async ({name, province, district, gender, birthday, phone, email}) => {
      const data =  {name, province, district, gender, birthday, phone, email}
    return await save(data);
  }
  
  const getUsers = async () => {
    return await getAll();
  }
  
  const getUserById = async (id) => {
    return await getById(id);
  }

  const updateUser = async (id,{name, province, district, gender, birthday, phone, email}) => {
    return await updateById(id, {name, province, district, gender, birthday, phone, email});
  }
  
  const deleteUser = async (id) => {
    return deleteById(id);
  }
  
  module.exports = { createUser, getUserById, getUsers, updateUser, deleteUser }
  