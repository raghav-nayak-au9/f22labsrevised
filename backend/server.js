const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// handle Uncaught Exceptions

// For eg:- if we write here in the code console.log(a) as a is not defined before, we get the error uncaught exception a is not defined.. To overcome this... please

process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down server due to uncaught exceptions...");
  process.exit(1);
});

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

// Connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// Handle Unhandled Promise Rejections

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejections`);
  server.close(() => {
    process.exit(1);
  });
});
