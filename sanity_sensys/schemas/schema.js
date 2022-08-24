
import createSchema from 'part:@sanity/base/schema-creator'

import product from './product'
import testimonial from "./testimonial";
import banner from "./banner";
import features from './features';

import schemaTypes from 'all:part:@sanity/base/schema-type'


export default createSchema({
  
  name: 'default',
  
  types: schemaTypes.concat([
    product, banner, testimonial,features
  ]),
})
