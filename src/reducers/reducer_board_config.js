import {
  CHANGE_BOARD_SIZE,
  CHANGE_BOARD_CHAR
} from '../actions/types';

const defaultConfig = {
  size: 2,
  char: '*'
};

export default (state = defaultConfig, action) => {
  switch (action.type) {
    case CHANGE_BOARD_SIZE:
      return {
        size: action.payload.size,
        char: state.char
      };
    case CHANGE_BOARD_CHAR:
      return {
        size: state.size,
        char: action.payload.char
      };
    default:
      return state;
  }
}
