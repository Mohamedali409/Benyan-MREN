const Admin = require("../models/Admin");
const loginSchema = require("../validation/admin.validation");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.SK_JWT, {
    expiresIn: "7d",
  });
};

const login = async function (req, res, next) {
  try {
    const { email, password } = req.body;

    const { error } = loginSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await admin.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = signToken(admin._id);

    admin.password = undefined;

    res.status(200).json({
      success: true,
      message: "Login success",
      token,
      data: admin,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { login };
