interface User {
  _id: any;

  username: string;
  password: string;
  isAdmin: boolean;
  accessToken: string;
  refreshToken: string;
  passwordResetToken: string;
  passwordResetExpires: string;

  createdAt: string;
  updatedAt: string;
}

export default User