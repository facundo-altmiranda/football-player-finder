export const GET_PLAYERS = 'GET_PLAYERS';
export const GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS';
export const GET_PLAYERS_FAILURE = 'GET_PLAYERS_FAILURE';
export const APPLY_FILTER = 'APPLY_FILTER';

function getPlayers() {
  return {
    type: GET_PLAYERS,
  };
}

function getPlayersSuccess(payload) {
  return {
    type: GET_PLAYERS_SUCCESS,
    payload,
  };
}

function getPlayersFailure(error) {
  return {
    type: GET_PLAYERS_FAILURE,
    payload: error,
  };
}

export function applyFilter(payload) {
  return {
    type: APPLY_FILTER,
    payload,
  };
}

export function fetchGetPlayers() {
  return (dispatch) => {
    dispatch(getPlayers());
    return fetch('https://football-players-b31f2.firebaseio.com/players.json')
      .then(response => response.json())
      .then(payload => dispatch(getPlayersSuccess(payload)))
      .catch(error => dispatch(getPlayersFailure(error)));
  };
}
