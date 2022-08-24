// import axios from "axios";
// // import mailchimp from '@mailchimp.mailchimp_marketing'
// // mailchimp.setConfig({
// //     API_KEY:process.env.NEXT_PUBLIC_MAILCHIMP_KEY
// //     server:
// // })
// function getRequestParams(email) {
//   // get env variables
//   const API_KEY = process.env.MAILCHIMP_KEY;
//   const LIST_ID = process.env.MAILCHIMP_ID;
//   // mailchimp datacenter - mailchimp api keys always look like this:
//   // fe4f064432e4684878063s83121e4971-us6
//   // We need the us6 part
//   const DATACENTER = process.env.MAILCHIMP_KEY.split("-")[1];

//   const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

//   // Add aditional params here. See full list of available params:
//   // https://mailchimp.com/developer/reference/lists/list-members/
//   const data = {
//     email_address: email,
//     status: "subscribed",
//   };

//   // Api key needs to be encoded in base 64 format
//   const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Basic ${base64ApiKey}`,
//   };

//   return {
//     url,
//     data,
//     headers,
//   };
// }

// export default async (req, res) => {
//   const { email } = req.body;
// console.log(req.body)
//   if (!email || !email.length) {
//     return res.status(400).json({
//       error: "Forgot to add your email?",
//     });
//   }

//   try {
//     const { url, data, headers } = getRequestParams(email);

//     const res = await axios.post(url, data, { headers });

//     // Success
//     return res.status(201).json({ error: null });
//   } catch (error) {
//     return res.status(400).json({
//       error: `Oops, something went wrong... Send me an email at sensysinfo31@gmail.com and I'll add you to the list.`,
//     });

//     // Report error to Sentry or whatever
//   }
// };


import mailchimp from "@mailchimp/mailchimp_marketing";
// const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER, // e.g. us1
});

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_ID, {
      email_address: email,
      status: "subscribed",
    });

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res
      .status(500)
      .json({
        error:
          `Oops, something went wrong... Send us an email at sensysinfo31@gmail.com and I'll add you to the list.` ||
          error.toString(),
      });
  }
};