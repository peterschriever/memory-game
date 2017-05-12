import {
  SET_CARD_COLOR,
  SET_OPEN_COLOR,
  SET_FOUND_COLOR
} from './types';

export function setCardColor(color) {
  console.log("setCardColor:", color);
  return {
    type: SET_CARD_COLOR,
    payload: color
  }
}

export function setOpenColor(color) {
  console.log("setOpenColor:", color);
  return {
    type: SET_OPEN_COLOR,
    payload: color
  }
}

export function setFoundColor(color) {
  console.log("setFoundColor:", color);
  return {
    type: SET_FOUND_COLOR,
    payload: color
  }
}
