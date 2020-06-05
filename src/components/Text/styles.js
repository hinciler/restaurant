import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {colors} from 'config';

export const styles = StyleSheet.create({
  H1: {
    color: colors.text0,
    fontSize: normalize(35),
    fontWeight: 'bold',
  },
  H1R: {
    color: colors.text0,
    fontSize: normalize(35),
  },
  H2: {
    color: colors.text0,
    fontSize: normalize(30),
    fontWeight: 'bold',
  },
  H3B: {
    color: colors.text0,
    fontWeight: 'bold',
    fontSize: normalize(25),
  },
  H3: {
    color: colors.text1,
    fontSize: normalize(22),
  },

  H4: {
    color: colors.text0,
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  H4NB: {
    color: colors.text0,
    fontSize: normalize(20),
    fontWeight: '100',
  },
  H5B: {
    color: colors.text1,
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  H5R: {
    color: colors.text0,
    fontSize: normalize(18),
  },
  PH: {
    color: colors.text2,
    fontWeight: '700',
    fontSize: normalize(16),
  },
  PL: {
    color: colors.text0,
    fontSize: normalize(14),
  },
  PLB: {
    color: colors.text1,
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  PLC: {
    color: colors.primary,
    fontSize: normalize(14),
    fontWeight: '600',
  },
  PM: {
    color: colors.text0,
    fontSize: normalize(12),
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  PMB: {
    color: colors.text0,
    fontSize: normalize(12),
    fontWeight: '700',
    flexWrap: 'wrap',
  },
  PMC: {
    color: colors.text0,
    fontSize: normalize(12),
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  PMM: {
    color: colors.text2,
    fontSize: normalize(12),
  },
  PR: {
    color: colors.text0,
    fontSize: normalize(14),
  },
  PS: {
    color: colors.text0,
    fontSize: normalize(10),
    lineHeight: 18,
  },
  PSS: {
    color: colors.text0,
    fontSize: normalize(10),
    lineHeight: 18,
  },
  PSM: {
    color: colors.text2,
    fontSize: normalize(10),
    fontWeight: '500',
  },
  PSB: {
    color: colors.text0,
    fontSize: normalize(10),
    fontWeight: 'bold',
  },
});
