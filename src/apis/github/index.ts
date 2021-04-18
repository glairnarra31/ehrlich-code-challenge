import instance from './instance';

export const getUserProfile = (token: string) => {
  return instance.get('/user', {
    headers: {
     authorization: `token ${token}`,
    }
  });
}

export default {
  getUserProfile
}
