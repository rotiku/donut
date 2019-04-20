import * as React from "react"
import { observer } from "mobx-react"
import { TextInput, TextStyle, ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Button } from "../../components/button"
import { AuthStore } from "../../models/auth-store"
import * as Progress from "react-native-progress"

export interface RegisterScreenProps extends NavigationScreenProps<{}> {
  authStore: AuthStore
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  paddingLeft: spacing[6],
  paddingRight: spacing[6],
}

const FONT_COLOR: TextStyle = {
  color: color.palette.black,
}

const ROUNDED_BOX: ViewStyle = {
  borderRadius: 50,
}

const LIGHT_BOX: ViewStyle = {
  borderColor: color.palette.lighterGrey,
  borderStyle: "solid",
  borderWidth: 1,
}

const FULL_WIDTH: ViewStyle = {
  width: "100%",
}

const TEXT_INPUT: ViewStyle = {
  paddingLeft: spacing[4],
  paddingRight: spacing[4],
}

const BUTTON: ViewStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[3],
}

const CHILD: ViewStyle = {
  marginBottom: spacing[3],
}

const HEADER: ViewStyle = {
  marginBottom: spacing[4],
}

// @inject("mobxstuff")
@observer
export class RegisterScreen extends React.Component<RegisterScreenProps, {}> {
  handleLoginPress() {
    this.props.navigation.navigate("login")
  }

  handleRegisterButtonPress() {
    this.props.authStore.register()
  }

  render() {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <Text style={[FONT_COLOR, HEADER]} preset="header" tx="registerScreen.header"/>
        <TextInput style={[ROUNDED_BOX, FULL_WIDTH, CHILD, TEXT_INPUT, LIGHT_BOX]} placeholder="Email"/>
        <TextInput style={[ROUNDED_BOX, FULL_WIDTH, CHILD, TEXT_INPUT, LIGHT_BOX]} placeholder="Password"/>
        <TextInput style={[ROUNDED_BOX, FULL_WIDTH, CHILD, TEXT_INPUT, LIGHT_BOX]} placeholder="Confirm Password"/>
        {!this.props.authStore.isLoading ?
          <Button style={[CHILD, FULL_WIDTH, BUTTON, ROUNDED_BOX]} onPress={() => this.handleRegisterButtonPress()}>
            <Text preset="bold" tx="registerScreen.buttonHint"/>
          </Button> : <Progress.Circle size={30} indeterminate={true}/>}}
        <Text style={{ marginTop: spacing[3] }} preset="secondary" tx="registerScreen.toLogin"
              onPress={() => this.handleLoginPress()}/>
      </Screen>
    )
  }
}
