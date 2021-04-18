import {combineReducers} from 'redux';

import geolocation from './geolocation';
import weather from './weather';
import user from './user';

export default combineReducers({ geolocation, weather, user });
