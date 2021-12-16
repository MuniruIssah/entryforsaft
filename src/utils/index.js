import {
  faBook,
  faExchangeAlt,
  faNewspaper,
  faQuestion,
  faQuoteLeft,
  faStream,
  faThLarge,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import sheehu from "../assets/sheehu.JPG";

export const countryColors = {
  Ghana: {
    first: "#CE1126",
    second: "#FCD116",
    third: "#006B3F",
  },
  Nigeria: {
    first: "#008751",
    second: "#FFFFFF",
    third: "#008751",
  },
  Senegal: {
    first: "#00853F",
    second: "#FDEF42",
    third: "#E31B23",
  },
  Morocco: {
    first: "#C1272D",
    second: "#006233",
    third: "#C1272D",
  },
};

export const AllPages = [
  {
    name: "All Apps",
    link: "/",
    icon: faThLarge,
  },
  {
    name: "Shuyuukh",
    link: "/shuyuukh",
    icon: faUsers,
  },
  {
    name: "Diwani",
    link: "/diwani",
    icon: faBook,
  },
  {
    name: "Transliterator",
    link: "/transliterate",
    icon: faExchangeAlt,
  },
  // {
  //   name:'Wird',
  //   link:'/wird',
  //   icon:faStream
  // },
  // {
  //   name:'News',
  //   link:'/news',
  //   icon:faNewspaper
  // },
  // {
  //   name:'FAQs',
  //   link:'/faqs',
  //   icon:faQuestion
  // },
  // {
  //   name:'Quotes',
  //   link:'/quotes',
  //   icon:faQuoteLeft
  // },
];

export const AppList = [
  // {
  //   label: 'Ruuhul Faida',
  //   description:"This is Ruuhul Faida's Website",
  //   image: sheehu,
  // },
  {
    label: "Shuyuukh",
    description: "All Sheikhs of Tijjaniyya",
    link: "shuyuukh",
    image: sheehu,
  },
  {
    label: "Diwani",
    description: "A famous book of praises",
    link: "diwani",
    image: sheehu,
  },
  {
    label: "Transliterator",
    description: "An Arabic Transliteration engine",
    link: "transliterate",
    image: sheehu,
  },
];

export const creations = [
  {
    title: "Add a new Sheikh",
    value: "sheikh",
  },
  {
    title: "Add a new Quote",
    value: "quote",
  },

  {
    title: "Add a new FAQ",
    value: "faq",
  },
];
