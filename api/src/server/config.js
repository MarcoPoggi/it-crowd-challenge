const ALLOWED_ORIGINS =
  process.env.DEV === "on"
    ? [
        "it-crowd-challenge-one.vercel.app",
        "https://it-crowd-challenge-marcopoggi.vercel.app",
        /https:\/\/it-crowd-challenge-.*-.vercel.app/,
        /http:\/\/localhost:([0-9]{4})/,
      ]
    : [
        "it-crowd-challenge-one.vercel.app",
        "https://it-crowd-challenge-marcopoggi.vercel.app",
        /https:\/\/it-crowd-challenge-.*-.vercel.app/,
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
