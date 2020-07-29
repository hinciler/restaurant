import React, {useRef} from 'react';
import {View, Text} from 'react-native';

export const useCountRenders = () => {
  const renders = useRef(0);
  console.log('renders:  ', renders.current++);
};
