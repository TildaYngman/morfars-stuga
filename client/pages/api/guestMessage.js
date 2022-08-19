//Any file inside of the pages/api folder is treated as an API endpoint.
const email = require("@sendgrid/mail");
email.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.guestName}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
`;
  const data = {
    to: "tildayngman@gmail.com",
    from: "matilda.yngman@hyperisland.se",
    subject: `New message from ${body.guestName}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };
  await email.send(data);
  res.status(200).json({ status: "OK" });
};
