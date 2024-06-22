const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Handeling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server, due to uncaught exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connect to db
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server, due to unhandled rejection`);

  server.close((err) => {
    process.exit(1);
  });
});
