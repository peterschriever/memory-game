import {
  SET_CARD_COLOR,
  SET_OPEN_COLOR,
  SET_FOUND_COLOR
} from '../actions/types';

const initColors = {
  closed: "#FF0000",
  open: "#00FF00",
  found: "#0000FF"
};

export default (state = initColors, action) => {
  switch (action.type) {
    case SET_CARD_COLOR:
      return {
        closed: action.payload.hex,
        open: state.open,
        found: state.found
      };
    case SET_OPEN_COLOR:
      return {
        closed: state.closed,
        open: action.payload.hex,
        found: state.found
      };
    case SET_FOUND_COLOR:
      return {
        closed: state.closed,
        open: state.open,
        found: action.payload.hex
      };
    default:
      return state;
  }
}
