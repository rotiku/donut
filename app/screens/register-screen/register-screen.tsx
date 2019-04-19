import * as React from "react"
import { observer } from "mobx-react"
import { TextInput, TextStyle, ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Button } from "../../components/button"

export interface RegisterScreenProps extends NavigationScreenProps<{}> {
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

  }

  render () {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <Text style={[FONT_COLOR, HEADER]} preset="header" tx="registerScreen.header" />
        <TextInput style={[ROUNDED_BOX, FULL_WIDTH, CHILD, TEXT_INPUT, LIGHT_BOX]} placeholder="Email"/>
        <TextInput style={[ROUNDED_BOX, FULL_WIDTH, CHILD, TEXT_INPUT, LIGHT_BOX]} placeholder="Password"/>
        <TextInput style={[ROUNDED_BOX, FULL_WIDTH, CHILD, TEXT_INPUT, LIGHT_BOX]} placeholder="Confirm Password"/>
        <Button style={[CHILD, FULL_WIDTH, BUTTON, ROUNDED_BOX]}>
          <Text preset="bold" tx="registerScreen.buttonHint"/>
        </Button>
        <Text style={{ marginTop: spacing[3] }} preset="secondary" tx="registerScreen.toLogin"
              onPress={() => this.handleLoginPress()}/>
      </Screen>
    )
  }
}
