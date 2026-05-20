const mongoose = require("mongoose");

const connect_db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect_db;
