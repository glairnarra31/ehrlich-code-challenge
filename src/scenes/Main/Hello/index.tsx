import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@/components'
import {connect} from "react-redux";
import actions from "@/redux/actions";

const HelloScene:React.FC<{
  authenticate: Function
}> = ({authenticate}) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Text category="header">Hello, World!</Text>
    </View>
    <Button label="Login" onPress={() => authenticate()}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default connect(
  null,
  {
    authenticate: actions.user.authenticate,
  }
)(HelloScene);
