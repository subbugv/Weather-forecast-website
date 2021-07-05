import moment from "moment";

export const getTime = (timestamp) => {
  return moment.utc(new Date(timestamp * 1000)).format("hh:mm A");
};

export const getFullDate = (dt) => {
  return moment.utc(new Date(dt * 1000)).format("hh:mm A, ddd, MMM DD, YYYY");
};

export const getDate = (dt) => {
  return moment.utc(new Date(dt * 1000)).format("MMM DD");
};
