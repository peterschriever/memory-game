import {
  SET_CARD_COLOR,
  SET_OPEN_COLOR,
  SET_PAIRED_COLOR
} from '../actions/types';

const initColors = {
  closed: "#FF0000",
  opened: "#00FF00",
  paired: "#0000FF"
};

export default (state = initColors, action) => {
  switch (action.type) {
    case SET_CARD_COLOR:
      return {
        closed: action.payload.hex,
        opened: state.opened,
        paired: state.paired
      };
    case SET_OPEN_COLOR:
      return {
        closed: state.closed,
        opened: action.payload.hex,
        paired: state.paired
      };
    case SET_PAIRED_COLOR:
      return {
        closed: state.closed,
        opened: state.opened,
        paired: action.payload.hex
      };
    default:
      return state;
  }
}
