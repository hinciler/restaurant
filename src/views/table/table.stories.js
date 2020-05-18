
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Table from './'; 
import { BufferView } from 'components/decorator';

storiesOf('Table', module)
  .addDecorator(BufferView)
  .add('default', () => {
    return <Table />;
  }) 
