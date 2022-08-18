// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function sendingMessage(req, res) {
  res
    .status(200)
    .json(
      { name: { setGuestName } },
      { phone: { setGuestPhone } },
      { email: { setEmail } },
      { subject: { setTitle } },
      { message: { setMessage } }
    );
}