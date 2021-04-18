import {AnyAction} from 'redux';
import {USER} from "@/enums/actions";
const {SET_USER_PROFILE, SET_USER_TOKEN} = USER;

interface User {
  token: string | null,
  profileUrl: string | null,
  name: string | null,
}

const initialState: User = {
  token: null,
  profileUrl: null,
  name: null
};

export default function(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload.token
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
