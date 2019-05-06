import * as React from "react"
import { NavigationScreenProps } from "react-navigation";
import { observer } from "mobx-react";
import { Screen } from "../../components/screen"
import { spacing, color } from "../../theme";
import { ViewStyle, TextInput } from "react-native";

export interface ItemListScreenProps extends NavigationScreenProps<{}> {

}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  paddingLeft: spacing[6],
  paddingRight: spacing[6],
}

const ROUNDED_BOX: ViewStyle = {
  borderRadius: 50,
}

const FULL_WIDTH: ViewStyle = {
  width: "100%",
}

const TEXT_INPUT: ViewStyle = {
  paddingLeft: spacing[4],
  paddingRight: spacing[4],
}

const LIGHT_BOX: ViewStyle = {
  borderColor: color.palette.lighterGrey,
  borderStyle: "solid",
  borderWidth: 1,
}

@observer
export class ItemListScreen extends React.Component<ItemListScreenProps, {}> {

  handleSearchValueChange(searchValue: string) {
    console.log(searchValue)
  }
  
  render() {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <TextInput style={[ROUNDED_BOX, FULL_WIDTH, TEXT_INPUT, LIGHT_BOX]} placeholder="Search"
          onChangeText={text => this.handleSearchValueChange(text)}/>
      </Screen>
    );
  }
}