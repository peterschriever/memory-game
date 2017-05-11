import {
  FLIP_CARD,
  PAIR_FOUND,
  PICK_COLOR,
  NEW_GAME,
  RESIZE_BOARD,
  CHANGE_CARD_CHAR,
  END_GAME,
  UPDATE_TOP_FIVE
} from './types';

export const flipCard = (card) => {
  return { type: FLIP_CARD, payload: card };
};
