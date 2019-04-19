import { ApiResponse, ApisauceInstance } from "apisauce"
import * as Types from "./auth.types";
import { getGeneralApiProblem } from "../croissant-problem"

export class AuthApi {

  apiSauce: ApisauceInstance

  constructor(apiSauce: ApisauceInstance) {
    this.apiSauce = apiSauce
  }

  async login(email: string, password: string): Promise<Types.LoginResult> {
    const body = { email, password }
    const response: ApiResponse<any> = await this.apiSauce.post("/auth", body)

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    console.log(response.data)
    return {
      kind: "ok",
      token: response.data.token,
    }
  }
}