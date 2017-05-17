import { combineReducers } from 'redux';
import ColorsReducer from './reducer_colors';
import GameReducer from './reducer_game';
import BoardConfigReducer from './reducer_board_config';

const rootReducer = combineReducers({
    colors: ColorsReducer,
    game: GameReducer,
    boardConfig: BoardConfigReducer
});

export default rootReducer;
