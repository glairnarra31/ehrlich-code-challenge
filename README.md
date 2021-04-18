# Ehrlich Code Challenge

A simple React Native App that uses GitHub OAuth authentication, React Native Geolocation API, and Open Weather API

## Pre-requisite

Before installing, make sure you have a working React Native Development environment for running React Native apps for version 0.63 and above. See more about setup [here](https://reactnative.dev/docs/environment-setup)

## Installation

1. Clone Repo or Download Zip

2. Create a .env file on the root directory of the app with the following keys. See more about Github Oauth [here](https://docs.github.com/en/developers/apps/creating-an-oauth-app) and Open Weather [here](https://openweathermap.org/appid)


```
OPEN_WEATHER_API_KEY=<Open weather api key>
GITHUB_CLIENT_ID=<Oauth Github client ID>
GITHUB_CLIENT_SECRET=<Oauth Github client secret>
```

3. npm install

```bash
npm install
```

4. Pod install

```bash
cd ios && pod install
```

5. Run application

For android:
```bash
npm run android
```
For ios:
```bash
npm run ios
```

## License
[MIT](https://choosealicense.com/licenses/mit/)