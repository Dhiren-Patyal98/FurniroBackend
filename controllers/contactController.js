const contact = require("../models/contact");
const user = require("../models/user");

const contactDetails = async (req, res) => {
  try {
    const userid = req.body.userid;
    const contacts = new contact({
      userid: req.body.userid,
      name: req.body.name,
      emailAddress: req.body.emailAddress,
      subject: req.body.subject,
    });

    const userval = await user.findOne({ _id: userid });

    if (userval) {
      const user_contact = await contacts.save();
      res.status(200).send({ success: true, data: user_contact });
    } else {
      res.status(404).send({ success: false, msg: "please login first" });
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const getContact = async (req, res, next) => {
  const getdata = await contact.find();
  res.send({ data: getdata });
};

exports.getContact = getContact;
exports.contactDetails = contactDetails;
