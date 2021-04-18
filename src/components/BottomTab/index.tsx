import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {RootState} from '@/redux/store';
import COLORS from '@/styles/colors';
import TabBar, {State} from './type'

const BottomTab: React.FC<{
  state: State,
  navigation: any,
  isLoggedIn: boolean,
}> = ({state, navigation, isLoggedIn}) => {
  if (!isLoggedIn) {
    return null
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name) 
        }

        return (
          <TouchableOpacity
            disabled={isFocused}
            key={label}
            onPress={onPress}
            style={styles.item}
          >
            <Text style={{ color: isFocused ? COLORS.PRIMARY : COLORS.PLACEHOLDER }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const mapStateToProps = ({user}: RootState) => {
  const { token, profileUrl, name } = user;
  return {
    isLoggedIn: !!(token && profileUrl && name)
  };
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderTopWidth: 0.9,
    borderTopColor: COLORS.BORDER,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ConnectedBottomTab =  connect(mapStateToProps)(BottomTab);

export default ({ state, navigation }: TabBar) => {
  return (<ConnectedBottomTab state={state} navigation={navigation} />)
}
