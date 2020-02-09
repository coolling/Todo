import { ADD, DELETE } from "../constants";

export const add = (data, backgroundcolor, importance) => {
  return {
    data,

    backgroundcolor,
    importance,
    type: ADD
  };
};

export const del = id => {
  return {
    id,
    type: DELETE
  };
};
