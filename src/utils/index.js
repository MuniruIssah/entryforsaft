import { faStream, faThLarge, faUsers } from "@fortawesome/free-solid-svg-icons";

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
  {
    name:'Wird',
    link:'/wird',
    icon:faStream 
  },
]