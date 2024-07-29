const user = require("../models/user");

const bcryptjs = require("bcryptjs");

const jwt = require("jsonwebtoken");
const path = require("path");

const securePassword = async (password) => {
  try {
    const passwordHash = await bcryptjs.hash(password, 10);
    return passwordHash;
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const register_user = async (req, res) => {
  try {
    const spassword = await securePassword(req.body.password);
    const users = new user({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      password: spassword,
      usertype: "user",
    });

    const useremail = await user.findOne({ email: req.body.email });

    const userphone = await user.findOne({ phone: req.body.phone });

    if (useremail) {
      res
        .status(200)
        .send({ success: false, msg: "This email is already exist" });
    } else if (userphone) {
      res
        .status(200)
        .send({ success: false, msg: "This phone number is already exist" });
    } else {
      const user_data = await users.save();
      res.status(200).send({ success: true, data: user_data });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const create_token = async (id) => {
  try {
    const token = await jwt.sign({ _id: id }, "thisisthesecretkey");
    return token;
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//login Method

const user_login = async (req, res) => {
  try {
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;

    if (email) {
      const userData = await user.findOne({ email: email });

      if (userData) {
        

        const passwordmatch = await bcryptjs.compare(
          password,
          userData.password
        );

        if (passwordmatch) {
          const tokenData = await create_token(userData._id);

          const userResult = {
            _id: userData._id,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            phone: userData.phone,
            type: userData.type,
            token: tokenData,
          };

          const response = {
            success: true,
            msg: "User Details",
            data: userResult,
          };

          res.status(200).send(response);
        } else {
          res
            .status(200)
            .send({ success: false, msg: "login details are incorrect" });
        }
      } else {
        res
          .status(200)
          .send({ success: false, msg: "login details are incorrect" });
      }
    } else
    
    
    
    {
      const userData = await user.findOne({ phone: phone });

      if (userData) {
        const passwordmatch = await bcryptjs.compare(
          password,
          userData.password
        );

        if (passwordmatch) {
          const tokenData = await create_token(userData._id);

          const userResult = {
            _id: userData._id,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            phone: userData.phone,
            type: userData.type,
            token: tokenData,
          };

          const response = {
            success: true,
            msg: "User Details",
            data: userResult,
          };

          res.status(200).send(response);
        } else {
          res
            .status(200)
            .send({ success: false, msg: "login details are incorrect" });
        }
      } else {
        res
          .status(200)
          .send({ success: false, msg: "login details are incorrect" });
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};



exports.user_login = user_login;
exports.register_user = register_user;
