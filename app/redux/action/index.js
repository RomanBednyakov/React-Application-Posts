import help from '../../helpers/helperAuth';
import apiRequest from '../../helpers/apiRequest';
import config from '../../config/index';

export const redirectHome = (data) => {
  return {
    type: 'REDIRECT_HOME',
    data,
  };
};

export const redirectLogin = (data) => {
  return {
    type: 'REDIRECT_LOGIN',
    data,
  };
};

export const MyPosts = (data) => {
  return {
    type: 'MY_POSTS',
    data,
  };
};

export const FriendsPosts = (data) => {
  return {
    type: 'FRIENDS_POSTS',
    data,
  };
};

export const clearFriends = (data) => {
  return {
    type: 'FRIENDS_CLEAR',
    data,
  };
};

export const Friends = (data) => {
  return {
    type: 'FRIENDS',
    data,
  };
};

export const errorLogin = (data) => {
  return {
    type: 'ERROR_LOGIN',
    data,
  };
};

export const errorMessage = (data) => {
  return {
    type: 'ERROR_MESSAGE',
    data,
  };
};

export function registration(login, password, email, avatar) {
  const data = {
    name: login,
    password,
    email,
    avatar,
  };
  localStorage.removeItem('token');
  // config.token = null;
  return (dispatch) => {
    return apiRequest.post(`${config.hrefUrl}/auth`, data)
      .then(help.checkStatus)
      .then(() => dispatch(redirectLogin(true)))
      .catch((error) => {
        console.log('error', error);
      });
  };
}

export function logining(login, password) {
  const userData = {
    name: login,
    password,
  };
  const url = new URL(`${config.hrefUrl}/auth`);
  url.search = new URLSearchParams(userData);
  return (dispatch) => {
    localStorage.removeItem('token');
    // config.token = null;
    return apiRequest.get(url)
      .then(help.checkStatus)
      .then(help.saveToken)
      .then(() => dispatch(redirectHome(true)))
      .catch(() => dispatch(errorLogin(true)));
  };
}

export function getMyPost() {
  return (dispatch) => {
    return apiRequest.get(`${config.hrefUrl}/posts/myPost`)
      .then(help.checkStatus)
      .then((response) => { dispatch(MyPosts(response.data.posts)); })
      .catch(() => dispatch(errorMessage(true)));
  };
}

export function getFriendsPost() {
  return (dispatch) => {
    return apiRequest.get(`${config.hrefUrl}/posts/friendsPost`)
      .then(help.checkStatus)
      .then((response) => {
        dispatch(FriendsPosts(response.data.posts ? response.data.posts : response.data));
      })
      .catch(() => dispatch(errorMessage(true)));
  };
}

export function getFriends(value) {
  const data = {
    value,
  };
  const url = new URL(`${config.hrefUrl}/users/search`);
  url.search = new URLSearchParams(data);
  return (dispatch) => {
    return apiRequest.get(url)
      .then(help.checkStatus)
      .then((response) => {
        dispatch(Friends(response.data));
      })
      .catch(() => dispatch(errorMessage(true)));
  };
}

export function addFriend(followingId) {
  const data = {
    followingId,
  };
  return () => {
    return apiRequest.post(`${config.hrefUrl}/followers`, data)
      .then(help.checkStatus)
      .catch((error) => {
        console.log('error', error);
      });
  };
}

export function removeFriends(followingId) {
  const data = {
    followingId,
  };
  console.log('##', data);
  return () => {
    return apiRequest.delete(`${config.hrefUrl}/followers`, data)
      .then(help.checkStatus)
      .catch((error) => {
        console.log('error', error);
      });
  };
}
