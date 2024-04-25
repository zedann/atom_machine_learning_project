const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const app = require("./app");

// Database
const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD)
  .replace("<username>", process.env.DB_USERNAME).replace("<dbname>", process.env.DB_NAME)



mongoose.connect(DB).then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.log(err);
})


// Server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
