import * as React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import COLORS from '@/styles/colors';
import {TextCategory} from './type';

const TextHOC: React.FC<{
  category?: TextCategory, style?:StyleProp<TextStyle>
}> = ({children, category='label', ...props}) => {
  const getStyle = (cat: string) => {
    switch (cat) {
      case 'header':
        return styles.header
      case 'title':
        return styles.title
      case 'subtitle':
        return styles.subtitle
      default:
        return styles.label
    }
  }

  return (
    <Text style={[getStyle(category), props.style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: COLORS.DARK,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: COLORS.DARK,
  },
  subtitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: COLORS.DARK,
  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: COLORS.DARK,
  },
});

export default TextHOC
