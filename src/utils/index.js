import { faNewspaper, faQuestion, faQuoteLeft, faStream, faThLarge, faUsers } from "@fortawesome/free-solid-svg-icons";

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

export const AllPages=[
  {
    name:'All Apps',
    link:'/',
    icon:faThLarge
  },
  {
    name:'Shuyuukh',
    link:'/shuyuukh',
    icon:faUsers 
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
]


export const creations=[
  {
    title:'Add a new Quote',
    value:'quote'
  },
  {
    title:'Add a new Sheikh',
    value:'sheikh'

  },
  {
    title:'Add a new FAQ',
    value:'faq'
  },

]