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
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_1951}>
        <View style={styles.View_1_1952}>
          <View style={styles.View_1_1953}>
            <View style={styles.View_I1_1953_839_7100}>
              <Text style={styles.Text_I1_1953_839_7100}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1954} />
        <View style={styles.View_1_1956}>
          <View style={styles.View_1_1957}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f519bc0a-7fa9-47d8-9bba-46814cd26c82"
              }}
              style={styles.ImageBackground_1_1958}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5178b278-115d-4c66-af6f-543943f128b7"
              }}
              style={styles.ImageBackground_1_1959}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ff7bdcc-8dad-460e-be34-313654ac9079"
              }}
              style={styles.ImageBackground_1_1963}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_1964}>
        <View style={styles.View_1_1965} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1660c24-a077-4157-8b7f-d0a49b26e560"
          }}
          style={styles.ImageBackground_1_1966}
        />
      </View>
      <View style={styles.View_1_1976}>
        <View style={styles.View_1_1977} />
      </View>
      <View style={styles.View_1_1978}>
        <View style={styles.View_1_1979}>
          <Text style={styles.Text_1_1979}>
            OK, I’m sending you a verification code. Please enter it below.
          </Text>
        </View>
        <View style={styles.View_1_1980}>
          <View style={styles.View_1_1981} />
          <View style={styles.View_1_1982}>
            <Text style={styles.Text_1_1982}>3764</Text>
          </View>
        </View>
        <View style={styles.View_1_1983}>
          <View style={styles.View_1_1984}>
            <Text style={styles.Text_1_1984}>Next</Text>
          </View>
        </View>
        <View style={styles.View_1_1985}>
          <Text style={styles.Text_1_1985}>
            Didn’t receive the code? Resend
          </Text>
        </View>
      </View>
      <View style={styles.View_1_1986}>
        <View style={styles.View_1_1987}>
          <Text style={styles.Text_1_1987}>
            Great! Enter your mobile phone number below.
          </Text>
        </View>
        <View style={styles.View_1_1988}>
          <View style={styles.View_1_1989}>
            <Text style={styles.Text_1_1989}>415 372 7462</Text>
          </View>
        </View>
        <View style={styles.View_1_1990}>
          <Text style={styles.Text_1_1990}>
            By signing up, you agree to our Privacy Policy and Terms and
            conditions.
          </Text>
        </View>
      </View>
      <View style={styles.View_1_1991}>
        <View style={styles.View_I1_1991_811_6831}>
          <View style={styles.View_I1_1991_811_6831_5_3093} />
        </View>
        <View style={styles.View_I1_1991_811_6832}>
          <View style={styles.View_I1_1991_811_6833}>
            <View style={styles.View_I1_1991_811_6833_107_9970} />
            <View style={styles.View_I1_1991_811_6833_107_9972}>
              <Text style={styles.Text_I1_1991_811_6833_107_9972}>1</Text>
            </View>
          </View>
          <View style={styles.View_I1_1991_811_6834}>
            <View style={styles.View_I1_1991_811_6834_107_9970} />
            <View style={styles.View_I1_1991_811_6834_107_9973}>
              <Text style={styles.Text_I1_1991_811_6834_107_9973}>ABC</Text>
            </View>
            <View style={styles.View_I1_1991_811_6834_107_9972}>
              <Text style={styles.Text_I1_1991_811_6834_107_9972}>2</Text>
            </View>
          </View>
          <View style={styles.View_I1_1991_811_6835}>
            <View style={styles.View_I1_1991_811_6835_107_9970} />
            <View style={styles.View_I1_1991_811_6835_107_9973}>
              <Text style={styles.Text_I1_1991_811_6835_107_9973}>DEF</Text>
            </View>
            <View style={styles.View_I1_1991_811_6835_107_9972}>
              <Text style={styles.Text_I1_1991_811_6835_107_9972}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1_1991_811_6836}>
          <View style={styles.View_I1_1991_811_6837}>
            <View style={styles.View_I1_1991_811_6837_107_9970} />
            <View style={styles.View_I1_1991_811_6837_107_9973}>
              <Text style={styles.Text_I1_1991_811_6837_107_9973}>GHI</Text>
            </View>
            <View style={styles.View_I1_1991_811_6837_107_9972}>
              <Text style={styles.Text_I1_1991_811_6837_107_9972}>4</Text>
            </View>
          </View>
          <View style={styles.View_I1_1991_811_6838}>
            <View style={styles.View_I1_1991_811_6838_107_9970} />
            <View style={styles.View_I1_1991_811_6838_107_9973}>
              <Text style={styles.Text_I1_1991_811_6838_107_9973}>JKL</Text>
            </View>
            <View style={styles.View_I1_1991_811_6838_107_9972}>
              <Text style={styles.Text_I1_1991_811_6838_107_9972}>5</Text>
            </View>
          </View>
          <View style={styles.View_I1_1991_811_6839}>
            <View style={styles.View_I1_1991_811_6839_107_9970} />
            <View style={styles.View_I1_1991_811_6839_107_9973}>
              <Text style={styles.Text_I1_1991_811_6839_107_9973}>MNO</Text>
            </View>
            <View style={styles.View_I1_1991_811_6839_107_9972}>
              <Text style={styles.Text_I1_1991_811_6839_107_9972}>6</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1_1991_811_6840}>
          <View style={styles.View_I1_1991_811_6841}>
            <View style={styles.View_I1_1991_811_6841_107_9970} />
            <View style={styles.View_I1_1991_811_6841_107_9973}>
              <Text style={styles.Text_I1_1991_811_6841_107_9973}>PQRS</Text>
            </View>
            <View style={styles.View_I1_1991_811_6841_107_9972}>
              <Text style={styles.Text_I1_1991_811_6841_107_9972}>7</Text>
            </View>
          </View>
          <View style={styles.View_I1_1991_811_6842}>
            <View style={styles.View_I1_1991_811_6842_107_9970} />
            <View style={styles.View_I1_1991_811_6842_107_9973}>
              <Text style={styles.Text_I1_1991_811_6842_107_9973}>TUV</Text>
            </View>
            <View style={styles.View_I1_1991_811_6842_107_9972}>
              <Text style={styles.Text_I1_1991_811_6842_107_9972}>8</Text>
            </View>
          </View>
          <View style={styles.View_I1_1991_811_6843}>
            <View style={styles.View_I1_1991_811_6843_107_9970} />
            <View style={styles.View_I1_1991_811_6843_107_9973}>
              <Text style={styles.Text_I1_1991_811_6843_107_9973}>WXYZ</Text>
            </View>
            <View style={styles.View_I1_1991_811_6843_107_9972}>
              <Text style={styles.Text_I1_1991_811_6843_107_9972}>9</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1_1991_811_6844}>
          <View style={styles.View_I1_1991_811_6845} />
          <View style={styles.View_I1_1991_811_6846}>
            <View style={styles.View_I1_1991_811_6846_107_925} />
            <View style={styles.View_I1_1991_811_6846_107_911}>
              <Text style={styles.Text_I1_1991_811_6846_107_911}>0</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2de91a06-f9ec-4d1b-8828-5b8447d31508"
            }}
            style={styles.ImageBackground_I1_1991_811_6847}
          />
        </View>
        <View style={styles.View_I1_1991_811_6883}>
          <View style={styles.View_I1_1991_811_6883_802_13302}>
            <Text style={styles.Text_I1_1991_811_6883_802_13302}>3764</Text>
          </View>
          <View style={styles.View_I1_1991_811_6883_802_13307}>
            <Text style={styles.Text_I1_1991_811_6883_802_13307}>
              From Messages
            </Text>
          </View>
          <View style={styles.View_I1_1991_811_6883_802_13309} />
          <View style={styles.View_I1_1991_811_6883_802_13310} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("116%") },
  View_1_1951: {
    width: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1952: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1953: {
    width: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1953_839_7100: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1953_839_7100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_1954: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1956: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1957: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1958: {
    width: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1959: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_1_1963: {
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_1_1964: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1965: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(46, 46, 76, 1)"
  },
  ImageBackground_1_1966: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_1976: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("112%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1977: {
    width: wp("34%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_1978: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("39%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_1979: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1979: {
    color: "rgba(46, 46, 76, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1980: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1981: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(247, 154, 28, 1)"
  },
  View_1_1982: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1982: {
    color: "rgba(118, 118, 118, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_1983: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    backgroundColor: "rgba(46, 46, 76, 1)"
  },
  View_1_1984: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1_1984: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1985: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_1_1985: {
    color: "rgba(46, 46, 76, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1986: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("17%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_1987: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1987: {
    color: "rgba(46, 46, 76, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1988: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1989: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1989: {
    color: "rgba(118, 118, 118, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1990: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_1_1990: {
    color: "rgba(84, 81, 79, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1991: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70%"),
    backgroundColor: "rgba(209, 211, 217, 1)"
  },
  View_I1_1991_811_6831: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6831_5_3093: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I1_1991_811_6832: {
    flexGrow: 1,
    width: wp("97%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6833: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6833_107_9970: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6833_107_9972: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6833_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I1_1991_811_6834: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6834_107_9970: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6834_107_9973: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1991_811_6834_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I1_1991_811_6834_107_9972: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6834_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I1_1991_811_6835: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6835_107_9970: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6835_107_9973: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1991_811_6835_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I1_1991_811_6835_107_9972: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6835_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I1_1991_811_6836: {
    flexGrow: 1,
    width: wp("97%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6837: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6837_107_9970: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6837_107_9973: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1991_811_6837_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I1_1991_811_6837_107_9972: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6837_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I1_1991_811_6838: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6838_107_9970: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6838_107_9973: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1991_811_6838_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I1_1991_811_6838_107_9972: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6838_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I1_1991_811_6839: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6839_107_9970: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6839_107_9973: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1991_811_6839_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I1_1991_811_6839_107_9972: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6839_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I1_1991_811_6840: {
    flexGrow: 1,
    width: wp("97%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6841: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6841_107_9970: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6841_107_9973: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1991_811_6841_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I1_1991_811_6841_107_9972: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6841_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I1_1991_811_6842: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6842_107_9970: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6842_107_9973: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1991_811_6842_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I1_1991_811_6842_107_9972: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6842_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I1_1991_811_6843: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6843_107_9970: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6843_107_9973: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1991_811_6843_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I1_1991_811_6843_107_9972: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6843_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I1_1991_811_6844: {
    flexGrow: 1,
    width: wp("97%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6845: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6846: {
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1991_811_6846_107_925: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1991_811_6846_107_911: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1_1991_811_6846_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  ImageBackground_I1_1991_811_6847: {
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%")
  },
  View_I1_1991_811_6883: {
    flexGrow: 1,
    width: wp("99%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 211, 217, 1)",
    overflow: "hidden"
  },
  View_I1_1991_811_6883_802_13302: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("3%"),
    justifyContent: "flex-end"
  },
  Text_I1_1991_811_6883_802_13302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I1_1991_811_6883_802_13307: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%"),
    justifyContent: "flex-end"
  },
  Text_I1_1991_811_6883_802_13307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I1_1991_811_6883_802_13309: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    backgroundColor: "rgba(174, 174, 178, 1)"
  },
  View_I1_1991_811_6883_802_13310: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%"),
    backgroundColor: "rgba(174, 174, 178, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
