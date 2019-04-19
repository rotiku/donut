import { GeneralApiProblem } from "../croissant-problem"

export type LoginResult = { kind: "ok"; token: string } | GeneralApiProblem