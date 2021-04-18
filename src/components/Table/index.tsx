import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@/components'
import COLORS from '@/styles/colors';
import {TableData} from './type';

const Table: React.FC<{
  data: TableData
}> = ({data}) => (
  <View style={styles.table}>
    {data.map((row: Array<string>, index) => {
      const category = index === 0 ? 'subtitle' : 'label'
      return (
        <View style={styles.row} key={`row-${index}`}>
          {
            row.map((field, index) => (
              <View style={styles.column} key={`${field}.${index}`}>
                <Text category={category}>{field}</Text>
              </View>
            ))
          }
        </View>
      )
    })}
  </View>
);

const styles = StyleSheet.create({
  table: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.BORDER
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.BORDER
  },
  column: {
    flex: 1,
    padding: 8,
    borderLeftWidth: 1,
    borderColor: COLORS.BORDER
  }
});

export default Table;
