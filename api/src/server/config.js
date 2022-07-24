const ALLOWED_ORIGINS =
  process.env.DEV === "on"
    ? [
        "https://it-crowd-challenge-one.vercel.app",
        "https://it-crowd-challenge-marcopoggi.vercel.app",
        /https:\/\/it-crowd-challenge-.*-marcopoggi.vercel.app/,
        /http:\/\/localhost:([0-9]{4})/,
      ]
    : [
        "https://it-crowd-challenge-one.vercel.app",
        "https://it-crowd-challenge-marcopoggi.vercel.app",
        /https:\/\/it-crowd-challenge-.*-marcopoggi.vercel.app/,
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
