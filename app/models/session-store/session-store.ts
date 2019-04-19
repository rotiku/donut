import { getEnv, getRoot, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Environment } from "../environment"
import { RootStore } from "../root-store"

/**
 * Model description here for TypeScript hints.
 */
export const SessionStoreModel = types
  .model("SessionStore")
  .props({
    token: types.optional(types.string, ""),
    valid: types.optional(types.boolean, false),
  })
  .views(self => ({
    get environment() {
      return getEnv(self) as Environment
    },
    get rootStore() {
      return getRoot(self) as RootStore
    },
  }))
  .actions(self => ({}))

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage). 
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type SessionStoreType = Instance<typeof SessionStoreModel>
export interface SessionStore extends SessionStoreType {}
type SessionStoreSnapshotType = SnapshotOut<typeof SessionStoreModel>
export interface SessionStoreSnapshot extends SessionStoreSnapshotType {}
