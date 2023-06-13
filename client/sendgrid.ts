// import sgMail from "@sendgrid/mail";
// require("dotenv").config();

// export async function sendEmail(to: string, subject: string, html: string) {
//   if (!process.env.NEXT_PUBLIC_SENDGRID_API_KEY) {
//     console.error("SENDGRID_API_KEY is not defined");
//     return;
//   }

//   sgMail.setApiKey(
//     "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"
//   );

//   const msg = {
//     to: "tilda.yngman@gmail.com",
//     from: "matilda.yngman@hyperisland.se", // Se@t your sender email address
//     subject: "hej",
//     html: `
//           <body>
//             <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
//                   </div>
//                   <div class="container" style="margin-left: 20px;margin-right: 20px;">
//                   <h3>You've got a new mail from , their email is: ✉️hrj </h3>
//                   <div style="font-size: 16px;">
//                   <p>Message:</p>
//                   <p>hej</p>
//                   <br>
//                   </div>
//           </body>
//           </html>`,
//   };

//   try {
//     await sgMail.send(msg);
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email", error);
//   }
// }
