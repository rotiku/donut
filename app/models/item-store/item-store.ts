import { types, getRoot, getEnv } from "mobx-state-tree"
import Item from "../item/item";
import { RootStore } from "../root-store";
import { Environment } from "../environment";

export const ItemStoreModel = types
  .model("ItemStore")
  .props({
    status: types.optional(types.enumeration(["idle", "pending", "success", "error"]), "idle"),
    items: types.optional(types.array(Item), [])
  })
  .views(self => ({
    get isLoading() {
      return status == "pending"
    },
    get rootStore() {
      return getRoot(self) as RootStore
    },
    get environment() {
      return getEnv(self) as Environment
    }
  }))
  .actions(self => ({
    setStatus(value?: "idle" | "pending" | "success" | "error") {
      self.status = value
    }
  }))
  .actions(self => ({
    update(searchValue: string) {
      self.setStatus("pending")
    }
  }))