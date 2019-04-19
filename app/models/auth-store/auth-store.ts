import { getEnv, getRoot, Instance, SnapshotOut, types } from "mobx-state-tree"
import { flow } from "mobx"
import { RootStore } from "../root-store"
import { Environment } from "../environment"

/**
 * Model description here for TypeScript hints.
 */
export const AuthStoreModel = types
  .model("AuthStore")
  .props({
    status: types.optional(types.enumeration(["idle", "pending", "success", "error"]), "idle"),
    email: types.optional(types.string, ""),
    password: types.optional(types.string, ""),
    confirmationPassword: types.optional(types.string, ""),
  })
  .views(self => ({
    get isPasswordMatch() {
      return self.password == self.confirmationPassword
    },
    get isLoading() {
      return self.status == "pending"
    },
    get rootStore() {
      return getRoot(self) as RootStore
    },
    get environment() {
      return getEnv(self ) as Environment
    },
  }))
  .actions(self => ({
    setStatus(value?: "idle" | "pending" | "success" | "error") {
      self.status = value
    },
    setEmail(email: string) {
      self.email = email
    },
    setPassword(password: string) {
      self.password = password
    },
    setConfirmationPassword(password: string) {
      self.confirmationPassword = password
    },
  }))
  .actions(self => ({
    login: flow(function*() {
      self.setStatus("pending")
      try {
        const result = yield self.environment.api.authApi.login(self.email, self.password)
        if (result.kind === "ok") {
          self.setStatus("success")
        } else {
          self.setStatus("error")
        }
      } catch {
        self.setStatus("error")
      }
    }),
  }))

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage). 
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type AuthStoreType = Instance<typeof AuthStoreModel>
export interface AuthStore extends AuthStoreType {}
type AuthStoreSnapshotType = SnapshotOut<typeof AuthStoreModel>
export interface AuthStoreSnapshot extends AuthStoreSnapshotType {}
