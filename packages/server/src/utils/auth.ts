import bcrypt from "bcrypt";

export const generateHash = async (password: string) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = async (password: string, candidate: string) => {
  return await bcrypt.compare(candidate, password).catch((_) => false);
};
