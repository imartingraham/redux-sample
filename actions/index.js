import $ from 'jquery';

export const GET_REPOS = 'GET_REPOS';

export function getRepos(){
  return dispatch => {
    return fetch("https://api.github.com/users/imartingraham/repos")
      .then(response => response.json())
      .then(json => dispatch({type: 'GET_REPOS', data: json}));
  }
}