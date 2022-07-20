const ALLOWED_ORIGINS =
  process.env.DEV === "on"
    ? [
        "https://itcrowd-ch-mp.vercel.app",
        /https:\/\/itcrowd-ch-mp.*-.*.vercel.app/,
        /http:\/\/localhost:([0-9]{4})/,
      ]
    : [
        "https://itcrowd-ch-mp.vercel.app",
        /https:\/\/itcrowd-ch-mp.*-.*.vercel.app/,
      ];

//access-control-allow:
const OPTIONS = {
  origin: ALLOWED_ORIGINS,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
};

module.exports = OPTIONS;
