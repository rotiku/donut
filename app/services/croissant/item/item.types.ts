import { GeneralApiProblem } from "../croissant-problem"

export type GetItemsResult = { kind: "ok"; items: [] } | GeneralApiProblem