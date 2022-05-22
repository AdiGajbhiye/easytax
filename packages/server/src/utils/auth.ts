import bcrypt from "bcrypt";

export const generateHash = async (password: string) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = async (password: string, candidate: string) => {
  return await bcrypt.compare(candidate, password).catch((e) => false);
};
