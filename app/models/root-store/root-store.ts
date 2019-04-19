import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { SessionStoreModel } from "../../models/session-store"
import { AuthStoreModel } from "../auth-store"
import { NavigationStoreModel } from "../../navigation/navigation-store"

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  sessionStore: types.optional(SessionStoreModel, {}),
  authStore: types.optional(AuthStoreModel, {}),
  navigationStore: types.optional(NavigationStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>
