import { locations } from "../constants";
//Get the latitude and longitude for a town
export const getTownLocation = (name) => {
  return locations[name];
};
