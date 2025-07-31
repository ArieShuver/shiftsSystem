import { Sequelize } from 'sequelize';

const rawPassword = 'tmXD8DF%C9JyyXy';  
const encodedPassword = encodeURIComponent(rawPassword);

const databaseUrl = `postgresql://postgres.nbfatptksemtisvfwnfy:${encodedPassword}@aws-0-eu-north-1.pooler.supabase.com:5432/postgres`;

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

export default sequelize;