export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
  synchronize: false,
  logging: false,
  entities: ["src/entity/*.ts"],
  migrations: ["src/database/migration/*.ts"],
  subscribers: [],
  cli: {
    migrationsDir: "src/database/migration",
    entitiesDir: "src/entity",
  },
};
