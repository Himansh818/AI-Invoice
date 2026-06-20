require("dotenv").config();
const pool = require("./src/config/db");

const app = require("./src/app");

async function startServer() {
  try {
    await pool.query("Select Now () ");
    console.log("postgres connected !");

    app.listen(process.env.PORT || 3000, () => {
      console.log(" App is running on 3000 port.. ");
    });
  } catch (error) {
    console.log("Database connection failed !");
  }
}

startServer();
