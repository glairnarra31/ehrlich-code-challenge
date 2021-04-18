import {AnyAction} from 'redux';
import {GEOLOCATION} from "@/enums/actions";
const {SET_GEOLOCATION} = GEOLOCATION;

interface Geolocation {
    latitude: number | null,
    longitude: number | null,
}

const initialState: Geolocation = {
  latitude: null,
  longitude: null
};

export default function(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {...action.payload};
    default:
      return state;
  }
}
