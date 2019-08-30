import app from "./app";
import config from "./config/configurations";

const server = app.listen(config.getPort(), () => {
  console.info(`App running on [${config.getEnviroment()}] mode at port [${config.getPort()}]\n`)
});

export default server;
