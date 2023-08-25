import { combineReducers } from 'redux';
import reducerTokensNotification from './token/reducers';
import reducerTokensCollection from './token_collection/reducers';

const reducer = combineReducers({
  token_notification: reducerTokensNotification,
  tokens_collection: reducerTokensCollection,
});

export default reducer;
