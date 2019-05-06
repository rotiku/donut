import { types } from "mobx-state-tree";

const Item = types
  .model("Item")
  .props({
    name: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    price: types.optional(types.number, -1),
    thumbnail: types.optional(types.string, "")
  })

export default Item;