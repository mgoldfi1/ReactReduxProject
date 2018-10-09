


export default function handleLogIn(user) {

return {type: "LOG_IN", user: user}
}

export function handleMessage(text) {
  return {type: "MESSAGE", text: text }
}

export function handleLogOut() {
  return (dispatch) => {dispatch({type: "LOG_OUT"})}
}

export function fetchMovies() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch('/api/movies')
      .then(resp => resp.json())
      .then(movies => dispatch({ type: 'ADD_MOVIES', movies: movies}));
  };
}

export function postReview(review) {
  return (dispatch) => {
    dispatch({ type: 'NEW_REVIEW', review: review})
  }
}
