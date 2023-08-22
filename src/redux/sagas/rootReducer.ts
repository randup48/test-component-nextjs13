import { combineReducers } from 'redux';
import { reducerTokens } from './token_collection/reducers';

const reducer = combineReducers({ tokens: reducerTokens });

export default reducer;
