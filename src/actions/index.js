import {
  SET_CARD_COLOR,
  SET_OPEN_COLOR,
  SET_PAIRED_COLOR,
  NEW_GAME,
  CHANGE_BOARD_CHAR,
  CHANGE_BOARD_SIZE,
  OPEN_CARD,
  START_TIMER,
  PAIR_FOUND,
  GAMEOVER
} from './types';

import Game from '../game/game';
window.currentGame = null;

export function setCardColor(color) {
  return {
    type: SET_CARD_COLOR,
    payload: color
  }
}

export function setOpenColor(color) {
  return {
    type: SET_OPEN_COLOR,
    payload: color
  }
}

export function setPairedColor(color) {
  return {
    type: SET_PAIRED_COLOR,
    payload: color
  }
}

export function startNewGame(boardConfig) {
  window.currentGame = new Game(boardConfig.size, boardConfig.char);

  return {
    type: NEW_GAME,
    payload: {
      game: window.currentGame
    }
  }
}

export function changeBoardChar(char) {
  return {
    type: CHANGE_BOARD_CHAR,
    payload: {
      char: char
    }
  }
}

export function changeBoardSize(size) {
  return {
    type: CHANGE_BOARD_SIZE,
    payload: {
      size: size
    }
  }
}

export function openCard(row, col) {
  console.log("openCard");
  // let the gameLogic figure out the next cardState
  window.currentGame.openCard(row, col);

  return {
    type: OPEN_CARD,
    payload: {
      cards: window.currentGame.getCards()
    }
  }
}
