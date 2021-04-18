import {AnyAction} from 'redux';
import {WEATHER} from "@/enums/actions";
const {SET_WEATHER} = WEATHER;

interface Weather {
    temp: number | null,
    description: string | null,
    main: string | null,
    pressure: number | null,
    humidity: number | null,
}

const initialState: Weather = {
    temp: null,
    description: null,
    main: null,
    pressure: null,
    humidity: null,
}

export default function(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_WEATHER:
      return {...action.payload};
    default:
      return state;
  }
}
