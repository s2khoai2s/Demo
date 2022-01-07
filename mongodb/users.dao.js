
const users = require("./index").db("facebook").collection("users");

const ObjectId = require("mongodb").ObjectId;

const save = async ({name, province, district, gender, birthday, phone, email}) => {
  const result = await users.insertOne({name, province, district, gender, birthday, phone, email});
  return result;
}

const getAll = async () => {
  const cursor = await users.find();
  return cursor.toArray();
}

const getById = async (id) => {
  return await users.findOne({ _id: ObjectId(id) });
}

const deleteById = async (id) => {
  return await users.deleteOne({ _id: ObjectId(id) });
}

const updateById = async (id, {name, province, district, gender, birthday, phone, email}) => {
    const result = await users.replaceOne(  { _id: ObjectId(id) },{name, province, district, gender, birthday, phone, email});
    return result;
}

module.exports = { save, getAll, getById, deleteById, updateById };
