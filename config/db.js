const mongoose = require("mongoose");
module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`connected to database`.green.underline);
  } catch (err) {
    console.log(err.message.red);
  }
};
