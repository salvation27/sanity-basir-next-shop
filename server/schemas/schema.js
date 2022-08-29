import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import product from "./product/product";
import user from "./product/user";
import category from "./product/category";
// import comments from './comments'

export default createSchema({
  name: "default",
  types: schemaTypes.concat([product, user]),
});
