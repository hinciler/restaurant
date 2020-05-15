
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Pincode from './index';
import { BufferView } from 'components/decorator';

storiesOf('Pincode', module)
  .addDecorator(BufferView)
  .add('default', () => {
    return <Pincode />;
  }) 
