import * as Types from "./user.types";
import { ApiResponse, ApisauceInstance } from "apisauce"
import { getGeneralApiProblem } from "../croissant-problem"

export class UserApi {

  apiSauce: ApisauceInstance

  constructor(apiSauce: ApisauceInstance) {
    this.apiSauce = apiSauce
  }

  async createUser(email: string, password: string): Promise<Types.CreateUserResult> {
    const body = { email, password }
    const response: ApiResponse<any> = await this.apiSauce.post("/user", body)

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    console.log(response.data)
    return { kind: "ok" }
  }
}