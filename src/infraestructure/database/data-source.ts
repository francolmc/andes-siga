import { consts } from "@config/constants";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "mysql",
    host: consts.DATABASE_HOST,
    port: consts.DATABASE_PORT,
    username: consts.DATABASE_USER,
    password: consts.DATABASE_PWD,
    database: consts.DATABASE_NAME,
    entities: [`${__dirname}/model/**/*.entity.js`],
    synchronize: true,
    migrations: [`${__dirname}/migrations/**/*.js`]
});

AppDataSource
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

export default AppDataSource;