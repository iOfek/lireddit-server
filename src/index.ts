import { MikroORM } from "@mikro-orm/core";
const main = async () => {
  const orm = MikroORM.init({
    dbName: "lireddit",
    type: "postgresql",
    debug: process.env.NODE_ENV !== "production",
  });
};
main();
