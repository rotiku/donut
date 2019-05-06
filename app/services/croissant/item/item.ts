import { ApisauceInstance, ApiResponse } from "apisauce"
import * as Types from "./item.types"
import { getGeneralApiProblem } from "../croissant-problem";

export class ItemApi {

  apiSauce: ApisauceInstance

  constructor(apiSauce: ApisauceInstance) {
    this.apiSauce = apiSauce
  }

  async getItems(searchValue: string, token: string): Promise<Types.GetItemsResult> {
    const response: ApiResponse<any> = await this.apiSauce.get("/items", {
      q: searchValue
    }, {
      headers: {
        authorization: token
      }
    })

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    console.log(response.data)
    return {
      kind: "ok",
      items: response.data
    }
  }
}