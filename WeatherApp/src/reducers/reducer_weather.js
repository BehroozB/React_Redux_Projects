import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    //Below, I am making a new array and adding the action payload data, then adding state data inside the array
      return [action.payload.data, ...state];
  };
  return state;
}
