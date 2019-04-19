import { createStackNavigator } from "react-navigation"
import { AuthNavigator } from "./auth-navigator"

export const RootNavigator = createStackNavigator(
  {
    authStack: { screen: AuthNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
