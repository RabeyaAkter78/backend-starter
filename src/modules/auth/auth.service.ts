/* eslint-disable prettier/prettier */
const register = async (payload: IUser) => {
  const result = await UserActivation.create(payload)
  return result
}

export const AuthService = {
  register,
}
