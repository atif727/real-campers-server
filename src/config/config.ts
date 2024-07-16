import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  access_secret: process.env.JWT_ACCESS_SECRET,
  access_expires: process.env.JWT_ACCESS_EXPIRES_IN,
  refresh_secret: process.env.JWT_REFRESH_SECRET,
  refresh_expires: process.env.JWT_REFRESH_EXPIRES_IN
};
