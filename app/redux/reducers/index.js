import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const initial =
  {
    redirectHome: false,
    errorLogin: false,
    redirectLogin: false,
    errorMessage: false,
    myPosts: [],
    friendsPosts: [] || {},
    friends: {},
  };
const reducer = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case 'REDIRECT_HOME':
      return {
        ...state,
        redirectHome: data,
      };
    case 'ERROR_LOGIN':
      return {
        ...state,
        errorLogin: data,
      };
    case 'REDIRECT_LOGIN':
      return {
        ...state,
        redirectLogin: data,
      };
    case 'ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: data,
      };
    case 'MY_POSTS':
      return {
        ...state,
        myPosts: data,
      };
    case 'FRIENDS_POSTS':
      return {
        ...state,
        friendsPosts: data,
      };
    case 'REDIRECT_REGISTRATION':
      return {
        ...state,
        redirectLogin: data,
      };
    case 'FRIENDS':
      return {
        ...state,
        friends: data,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
  routing: routerReducer,
});

export default rootReducer;
