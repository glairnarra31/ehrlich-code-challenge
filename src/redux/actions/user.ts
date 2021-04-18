import {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET} from 'react-native-dotenv'
import {USER} from '@/enums/actions';
import {getUserProfile} from '@/services/user';
import {authorize} from 'react-native-app-auth';
import {User} from './type';

type UserAction = {
  type: string
  payload: User
}
  
type DispatchType = (args: UserAction) => UserAction

export const authenticate: Function = () => async (dispatch: DispatchType) => {
  try {
    const config = {
      redirectUrl: 'com.ehrlichcodechallenge://callback',
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      scopes: ['identity'],
      additionalHeaders: { 'Accept': 'application/json' },
      serviceConfiguration: {
        authorizationEndpoint: 'https://github.com/login/oauth/authorize',
        tokenEndpoint: 'https://github.com/login/oauth/access_token',
        revocationEndpoint:
          `https://github.com/settings/connections/applications/${GITHUB_CLIENT_ID}`
      }
    };
    
    const result = await authorize(config);
    dispatch({
      type: USER.SET_USER_TOKEN,
      payload: {
        token: result.accessToken,
      }
    })
    dispatch(setUserProfile(result.accessToken))
  } catch (error) {
    console.log('authenticate', error);
  }
}

export const setUserProfile: Function = (token: string) => async (dispatch: DispatchType) => {
  try {
    const data: any = await getUserProfile(token);
    console.log('data', data);
    dispatch({
      type: USER.SET_USER_PROFILE,
      payload: {
        profileUrl: data.html_url,
        name: data.name,
      },
    })
  } catch (error) {
    console.log('setUserProfile', error)
  }
};

export default {
  setUserProfile,
  authenticate,
}
