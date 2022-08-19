//Any file inside of the pages/api folder is treated as an API endpoint.


export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({});
  console.log(req.body);
}
