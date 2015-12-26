
var initialState = ({ repos: [] });
export default (state = initialState, action) => {
  switch(action.type){
    case 'GET_REPOS':
      return Object.assign({}, state, { repos: action.data });
    break;
    default:
      return state;
  }
}