import { actions } from './actions';

interface initValue {
  loading: boolean;
  data: any;
}

const initialState = <initValue>{
  loading: false,
};

export const reducerTokens = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case actions.set_tokens:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
