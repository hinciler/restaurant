//const Realm = require('realm');
import * as type from '../schemaTypes';

export const CarSchema = {
  name: type.Car,
  properties: {
    make: 'string',
    model: 'string',
    miles: {
      type: 'int',
      default: 0,
    },
  },
};

export const PersonSchema = {
  name: type.Person,
  properties: {
    name: 'string',
    cars: {
      type: 'list',
      objectType: type.Car,
    },
  },
};
