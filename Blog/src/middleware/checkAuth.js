import { selectUser } from "../appredux/userSlice";

export const adminAuth = async(store) => {
  const user = await selectUser(store.getState());
  const isAdmin = user && user.role === "admin";
  return isAdmin;
};
export const userAuth = async(store) => {
  const user = await selectUser(store.getState());
  const isUser = user && user.role === "user";
  return isUser;
};
