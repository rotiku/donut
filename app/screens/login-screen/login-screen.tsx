import * as React from "react"
import { inject, observer } from "mobx-react"
import { TextInput, TextStyle, ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Button } from "../../components/button"
import { AuthStore } from "../../models/auth-store"
import * as Progress from "react-native-progress";

export interface LoginScreenProps extends NavigationScreenProps<{}> {
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

@inject("authStore")
@observer
export class LoginScreen extends React.Component<LoginScreenProps, {}> {
  handleRegisterPress() {
    this.props.navigation.navigate("register")
  }

  handleUsernameChange(username: string) {
    this.props.authStore.setEmail(username)
  }

  handlePasswordChange(password: string) {
    this.props.authStore.setPassword(password)
  }

  handleLoginButtonPress() {
    this.props.authStore.login()
  }

  render() {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <Text style={[FONT_COLOR, HEADER]} preset="header" tx="loginScreen.header"/>
        <TextInput style={[ROUNDED_BOX, FULL_WIDTH, CHILD, TEXT_INPUT, LIGHT_BOX]} placeholder="Email"
                   onChangeText={text => this.handleUsernameChange(text)}/>
        <TextInput style={[ROUNDED_BOX, FULL_WIDTH, CHILD, TEXT_INPUT, LIGHT_BOX]} placeholder="Password"
                   onChangeText={text => this.handlePasswordChange(text)}/>
        {!this.props.authStore.isLoading ?
          <Button style={[CHILD, FULL_WIDTH, BUTTON, ROUNDED_BOX]} onPress={() => this.handleLoginButtonPress()}>
            <Text preset="bold" tx="loginScreen.buttonHint"/>
          </Button> : <Progress.Circle size={30} indeterminate={true}/>}
        <Text style={{ marginTop: spacing[3] }} preset="secondary" tx="loginScreen.register"
              onPress={() => this.handleRegisterPress()}/>
      </Screen>
    )
  }
}
