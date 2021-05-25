import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ae5/cb6e/63e320d08749fe99ae05a83e849999b6"
        }}
        style={styles.ImageBackground_1_3}
      />
      <View style={styles.View_6_0}>
        <Text style={styles.Text_6_0}>Nonprofit Name</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_1_3: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("8.333333333333332%")
  },
  View_6_0: {
    width: wp("52.89855072463768%"),
    minWidth: wp("52.89855072463768%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.67149758454106%"),
    top: hp("14.617486338797814%")
  },
  Text_6_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
