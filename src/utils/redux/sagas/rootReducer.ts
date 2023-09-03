import { combineReducers } from 'redux';
import reducerTokensNotification from './token/reducers';
import reducerTokensCollection from './token_collection/reducers';
import reducerAccessMenu from './access_menu/reducers';

const reducer = combineReducers({
  access_menu: reducerAccessMenu,
  token_notification: reducerTokensNotification,
  tokens_collection: reducerTokensCollection,
});

export default reducer;
