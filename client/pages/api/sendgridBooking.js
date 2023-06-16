// import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

// async function sendBookingRequest(req, res) {
//   console.log(req.body.name);
//   try {
//     await sendgrid.send({
//       to: "tildayngman@gmail.com", // Your email where you'll receive emails
//       from: "matilda.yngman@hyperisland.se", // your website email address here
//       subject: `Bokningsförfrågan från ${req.body.name}`,
//       html: `
//       <body>
//         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
//               </div>
//               <div class="container" style="margin-left: 20px;margin-right: 20px;">
//               <h3>You've got a new booking request from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
//               <div style="font-size: 16px;">
//               <p>Message:</p>
//               <p>${req.body.message}</p>
//               <p>Phone number to guest:</p>
//               <p>${req.body.phone}</p>
//               <p>Number of people:</p>
//               <p>${req.body.people}</p>
//               <br>
//               <p>Vecka:</p>
//               <p>${req.body.vecka}</p>
//               <br>
//               </div>
//       </body>
//       </html>`,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// }

// export default sendBookingRequest;
