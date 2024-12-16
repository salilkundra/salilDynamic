const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  // client_id: "AQEOloKic_tIsq1hRLw7hhnv8x-uyXTOYCA7yJNZSU3Il92pT6iJHbiasqhEYOfeyVpa76vlWLY6FjYW",
  client_id: "AfN6g_FwddnIshT7RqHPqOdLr3EJPpnFKsWCQMWhbXvL0k5X3CF0oK_NIh2jlHOD7E3rW1Vkxep6lMlX",

  // client_secret: "EOwZasFbcEIgOFVWg0xipvA2jPx7RQ6yszOviu2WSN_9wSXXFtGHwbSlsj8nUWVEY8exKYOqNTMgwxle",
  client_secret: "EFCKwYUdjTCDAlMt-qoYkLLT2hzDt_ZdF1ZxR_SzYJth8p2cd7OEFeEB9Aqs4icaOQVs5a9b6dw2sEEq",

});

module.exports = paypal;
