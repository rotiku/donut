import * as env from "../../environment-variables"

export interface ApiConfig {

  url: string

  timeout: number
}

export const DEFAULT_CROISSANT_CONFIG: ApiConfig = {
  url: env.API || "https://croissant-bali.herokuapp.com",
  timeout: 10000,
}