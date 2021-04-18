import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {connect} from "react-redux";
import {Table} from '@/components'
import {RootState} from '@/redux/store';
import {Weather} from '@/redux/actions/type';

const WeatherScene: React.FC<{
  weather: Weather
}> = ({weather}) => {
  const date = new Date().toLocaleDateString();
  const { temp, description, humidity, main, pressure } = weather

  const simpleData = [
    ['Date (mm/dd/yy)', 'Temperature (F)'],
    [date, temp || ''],
  ];

  const expandedData = [
    ['Date\n(mm/dd/yy)', 'Temperature (F)', 'Description', 'Main', 'Pressure', 'Humidity'],
    [date, temp || '', description || '', main || '', pressure || '', humidity || ''],
  ];

  const [orientation, setOrientation] = React.useState("PORTRAIT");

  React.useEffect(() => {
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
        setOrientation(width < height ? 'PORTRAIT' : 'LANDSCAPE')
    })
  }, []);

  return (
      <View style={styles.container}>
        <Table data={orientation === 'PORTRAIT' ? simpleData : expandedData} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});

const mapStateToProps = ({weather}: RootState) => {
  return {weather};
}

export default connect(mapStateToProps)(WeatherScene);
