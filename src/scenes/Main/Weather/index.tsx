import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Table} from '@/components'

export default () => {
  const simpleData = [
    ['Date (mm/dd/yy)', 'Temperature (F)'],
    ['09/01/2020', '75'],
  ];

  const expandedData = [
    ['Date\n(mm/dd/yy)', 'Temperature (F)', 'Description', 'Main', 'Pressure', 'Humidity'],
    ['09/01/2020', '75', 'Sky is clear', 'Clear', '1023.68', '100'],
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
