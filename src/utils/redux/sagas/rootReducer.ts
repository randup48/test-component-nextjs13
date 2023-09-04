import { combineReducers } from 'redux';
import reducerTokensCollection from './token_collection/reducers';
import reducerAccessMenu from './access_menu/reducers';

const reducer = combineReducers({
  access_menu: reducerAccessMenu,
  tokens_collection: reducerTokensCollection,
});

export default reducer;
