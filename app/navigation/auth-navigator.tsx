import { createStackNavigator } from "react-navigation"
import { LoginScreen } from "../screens/login-screen"
import { RegisterScreen } from "../screens/register-screen"

export const AuthNavigator = createStackNavigator({
  login: { screen: LoginScreen },
  register: { screen: RegisterScreen },
},
  {
  headerMode: "none",
})