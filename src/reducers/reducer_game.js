import {
  NEW_GAME,
  OPEN_CARD
} from '../actions/types';

const noGameState = {
  board: {
    cards: [],
    char: '*',
    size: 2
  },
  pairCandidate: null
};

export default (state = noGameState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return action.payload.game;
    case OPEN_CARD:
      return {
        board: {
          cards: action.payload.cards,
          char: state.board.char,
          size: state.board.size
        },
        pairCandidate: state.pairCandidate
      };
    default:
      return state;
  }
}
