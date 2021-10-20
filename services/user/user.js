import UserModel from "../../models/user/userModel";

export const createUser = async (user) => {
  const createdUser = new UserModel(user);
  return await createdUser.save();
};

export const userExist = async (email) => {
  return await UserModel.exists({ email: email });
};

export const getUser = async (email) => {
  return await UserModel.findOne({ email });
};
