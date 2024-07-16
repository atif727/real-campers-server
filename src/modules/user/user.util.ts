import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { name: string; email: string },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
