import { SessionStoreModel, SessionStore } from "./session-store"

test("can be created", () => {
  const instance: SessionStore = SessionStoreModel.create({})

  expect(instance).toBeTruthy()
})