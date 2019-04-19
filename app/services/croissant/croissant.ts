import { ApisauceInstance, create } from "apisauce"
import { ApiConfig, DEFAULT_CROISSANT_CONFIG } from "./croissant-config"
import { UserApi } from "./user/user"
import { AuthApi } from "./auth/auth"

export class Api {

  apiSauce: ApisauceInstance

  config: ApiConfig

  userApi: UserApi

  authApi: AuthApi

  constructor(config: ApiConfig = DEFAULT_CROISSANT_CONFIG) {
    this.config = config
  }

  setup() {
    this.apiSauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
    this.userApi = new UserApi(this.apiSauce)
    this.authApi = new AuthApi(this.apiSauce)
  }
}
