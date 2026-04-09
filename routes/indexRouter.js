const express = require("express");
const router = express.Router();
const debug = require("debug")("app");

const text2 = "FUHSO COLLABORATE WITH WAC-EID ";
const descrip =
  "The Federal University of Health Sciences, Otukpo specialized University that will train and produce high-quality healthcare professionals that will contribute to the development of the health sector in Nigeria";
const news = [
  {
    body: text2,
  },
  {
    body: "ADVERTISEMENT FOR REMEDIAL SCIENCE PROGRAMM",
  },
  {
    body: "STUDENTS REGISTRATION",
  },
  {
    body: "TEACHING HOSPITAL INTERVENTION",
  },
  {
    body: "HOW TO PAY FOR REMEDIAL SCIENCE APPLICATION FORM",
  },
  {
    body: text2,
  },
  {
    body: text2,
  },
];

// Route to render index.ejs when visiting the root URL
router.get("/", (req, res) => {
  const text =
    "The Federal University of Health Sciences, Otukpo has announced the commencement of the 2024 academic session with enhanced facilities and expanded scholarship programs. The university continues to strengthen partnerships with international health organizations to improve research and clinical training. Students are encouraged to register early and familiarize themselves with new academic policies. The institution remains committed to producing world-class healthcare professionals.";
  const text1 = text.slice(0, 45);

  const latest = [
    { image: "coat.jpg", title: text1, date: "January 20", body: text },
    {
      image: "coat.jpg",
      title: text1,
      date: "February 20",
      body: text,
    },
    { image: "coat.jpg", title: text1, date: "January 20", body: text },
  ];
  const cards = [
    {
      title: "lorem ipsum",
      body: text,
      url: "time.jpg",
    },
    {
      title: "lorem ipsum",
      body: text,
      url: "hospital.jpg",
    },
    {
      title: "lorem ipsum",
      body: text,
      url: "time.jpg",
    },
    {
      title: "lorem ipsum",
      body: text,
      url: "student-resumption.jpg",
    },
    {
      title: "lorem ipsum",
      body: text,
      url: "2020-Matric.jpg",
    },
    {
      title: "lorem ipsum",
      body: text,
      url: "coat.jpg",
    },
    {
      title: "lorem ipsum",
      body: text,
      url: "time.jpg",
    },
    {
      title: "lorem ipsum",
      body: text,
      url: "coat.jpg",
    },
    {
      title: "lorem ipsum",
      body: text,
      url: "2020-Matric.jpg",
    },
  ];

  const values = [
    {
      icon: "intergrity",
      title: "intergrity",
      body: "Committed to truth and intellectual honesty in all indertaking",
    },
    {
      icon: "transparent",
      title: "transparency",
      body: "Conduct our activity with complete and open transparent ",
    },
    {
      icon: "dedication",
      title: "dedication",
      body: "Demonstrate unrelentless dedication by going beyound and abouve our expectation to meet goals of the university",
    },
    {
      icon: "accountability",
      title: "accountability",
      body: "Accountable for all our everyday descision and action toour institution stakeholders and society in general",
    },
    {
      icon: "partnership",
      title: "partnership",
      body: "Develope strong partnership based on mutual trust and respect in all collaboration",
    },
    {
      icon: "innovation",
      title: "innovation",
      body: "Dedicated to engaging in innovative health science that will translate into improved qualityof life for the people",
    },
    {
      icon: "equity",
      title: "equity",
      body: "equal and fair treatment for all including gender eqality in the university",
    },
  ];
  const calender = [
    { title: text1, month: "OCT", day: "06", town: "otada" },
    { title: text1, month: "DEC", day: "06", town: "otada" },
    { title: text1, month: "OCT", day: "06", town: "otada" },
    { title: text1, month: "FED", day: "06", town: "otada" },
  ];

  res.render("index", {
    title: "Home",
    news: news,
    cards: cards,
    hero_title: "COMPETENCE",
    hero_subtitle: "Welcome Back On Campus",
    calender: calender,
    latest: latest,
    values: values,
    descrip: descrip,
  });
});

router.get("/faq", (req, res) => {
  res.render("faq", {
    title: "FAQ",
    news: news,
    descrip: descrip,
  });
});

router.get("/contact", (req, res) => {
  const title = "Contact us";
  res.render("contact", {
    title: title,
    news: news,
    descrip: descrip,
  });
});

module.exports = router;
