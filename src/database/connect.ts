import { createConnection } from "typeorm";

createConnection()
  .then(() => {
    console.log("✔ Database connected successfully.");
  })
  .catch((error) => {
    console.log(error);
  });
