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
      <View style={styles.View_1_1870}>
        <View style={styles.View_1_1871}>
          <View style={styles.View_1_1872}>
            <View style={styles.View_I1_1872_839_7100}>
              <Text style={styles.Text_I1_1872_839_7100}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1873} />
        <View style={styles.View_1_1875}>
          <View style={styles.View_1_1876}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/328b4324-20ad-4628-b0a4-924b13ec173f"
              }}
              style={styles.ImageBackground_1_1877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/533d2ee2-8cb7-44e5-9833-a75adf6f5d88"
              }}
              style={styles.ImageBackground_1_1878}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f28ec26-c7ef-4311-ade1-d16db699933e"
              }}
              style={styles.ImageBackground_1_1882}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_1883}>
        <View style={styles.View_1_1884} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afecb391-bf15-490b-b8ba-641f49bf1c27"
          }}
          style={styles.ImageBackground_1_1885}
        />
      </View>
      <View style={styles.View_1_1895}>
        <View style={styles.View_1_1896} />
      </View>
      <View style={styles.View_1_1897}>
        <View style={styles.View_1_1898}>
          <Text style={styles.Text_1_1898}>Hi, I&#39;m Lucy.</Text>
        </View>
      </View>
      <View style={styles.View_1_1899}>
        <View style={styles.View_1_1900}>
          <Text style={styles.Text_1_1900}>
            I&#39;m here to help you organize and share your photos and videos.
          </Text>
        </View>
      </View>
      <View style={styles.View_1_1901}>
        <View style={styles.View_1_1902}>
          <Text style={styles.Text_1_1902}>
            To get started, enter your mobile phone number below.
          </Text>
        </View>
        <View style={styles.View_1_1903}>
          <View style={styles.View_1_1904} />
          <View style={styles.View_1_1905}>
            <Text style={styles.Text_1_1905}>Enter mobile number here</Text>
          </View>
        </View>
        <View style={styles.View_1_1906}>
          <View style={styles.View_1_1907}>
            <Text style={styles.Text_1_1907}>Next</Text>
          </View>
        </View>
        <View style={styles.View_1_1908}>
          <Text style={styles.Text_1_1908}>
            By clicking “Next”, you agree to our Privacy Policy and Terms and
            conditions.
          </Text>
        </View>
      </View>
      <View style={styles.View_1_1909}>
        <View style={styles.View_I1_1909_1649_33906}>
          <View style={styles.View_I1_1909_1649_34874} />
          <View style={styles.View_I1_1909_1861_21394}>
            <View style={styles.View_I1_1909_47_13605}>
              <View style={styles.View_I1_1909_47_13734}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7a7b570-f808-4fcf-b333-3f9f553ff172"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13735}
                />
                <View style={styles.View_I1_1909_47_13736}>
                  <Text style={styles.Text_I1_1909_47_13736}>0</Text>
                </View>
              </View>
              <View style={styles.View_I1_1909_1649_34557}>
                <View style={styles.View_I1_1909_47_13606}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/751d17d6-1db8-4e98-b95c-7ffe99e53ece"
                    }}
                    style={styles.ImageBackground_I1_1909_47_13607}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33e30d6d-41b3-490b-b34b-b2132124605f"
                    }}
                    style={styles.ImageBackground_I1_1909_47_13614}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcb5c176-dadd-469c-b0fe-285c0c6f881a"
                    }}
                    style={styles.ImageBackground_I1_1909_47_13615}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d385cbe-4882-4f68-8209-d98b780bc76d"
                    }}
                    style={styles.ImageBackground_I1_1909_47_13616}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d928a7f-ee10-49e4-8e94-9c280b3f288f"
                    }}
                    style={styles.ImageBackground_I1_1909_47_13617}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85e78fa8-9088-4737-9518-0ef28970ebcf"
                    }}
                    style={styles.ImageBackground_I1_1909_47_13618}
                  />
                </View>
              </View>
              <View style={styles.View_I1_1909_47_13741}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3d23f2d-fa11-4af5-96a9-0c25d3cde78e"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13742}
                />
                <View style={styles.View_I1_1909_47_13743}>
                  <Text style={styles.Text_I1_1909_47_13743}>WXYZ</Text>
                </View>
                <View style={styles.View_I1_1909_47_13744}>
                  <Text style={styles.Text_I1_1909_47_13744}>9</Text>
                </View>
              </View>
              <View style={styles.View_I1_1909_47_13749}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63f76342-1d83-4161-a42b-cdb19a304001"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13750}
                />
                <View style={styles.View_I1_1909_47_13751}>
                  <Text style={styles.Text_I1_1909_47_13751}>TUV</Text>
                </View>
                <View style={styles.View_I1_1909_47_13752}>
                  <Text style={styles.Text_I1_1909_47_13752}>8</Text>
                </View>
              </View>
              <View style={styles.View_I1_1909_47_13753}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3a9a5e1-5992-4a46-b8e7-a8b6a9b9c1f1"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13754}
                />
                <View style={styles.View_I1_1909_47_13755}>
                  <Text style={styles.Text_I1_1909_47_13755}>PQRS</Text>
                </View>
                <View style={styles.View_I1_1909_47_13756}>
                  <Text style={styles.Text_I1_1909_47_13756}>7</Text>
                </View>
              </View>
              <View style={styles.View_I1_1909_47_13757}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8eb42e66-724f-468a-b37f-7b123f7c1066"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13758}
                />
                <View style={styles.View_I1_1909_47_13759}>
                  <Text style={styles.Text_I1_1909_47_13759}>MNO</Text>
                </View>
                <View style={styles.View_I1_1909_47_13760}>
                  <Text style={styles.Text_I1_1909_47_13760}>6</Text>
                </View>
              </View>
              <View style={styles.View_I1_1909_47_13737}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd195fed-0cc1-4889-8fb6-280d16494687"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13738}
                />
                <View style={styles.View_I1_1909_47_13739}>
                  <Text style={styles.Text_I1_1909_47_13739}>JKL</Text>
                </View>
                <View style={styles.View_I1_1909_47_13740}>
                  <Text style={styles.Text_I1_1909_47_13740}>5</Text>
                </View>
              </View>
              <View style={styles.View_I1_1909_47_13745}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c42a1c24-e2df-4bc7-b261-ec97b645b083"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13746}
                />
                <View style={styles.View_I1_1909_47_13747}>
                  <Text style={styles.Text_I1_1909_47_13747}>GHI</Text>
                </View>
                <View style={styles.View_I1_1909_47_13748}>
                  <Text style={styles.Text_I1_1909_47_13748}>4</Text>
                </View>
              </View>
              <View style={styles.View_I1_1909_47_13761}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/920f1a44-662a-484a-98ae-7a5e6b1274b2"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13762}
                />
                <View style={styles.View_I1_1909_47_13763}>
                  <Text style={styles.Text_I1_1909_47_13763}>DEF</Text>
                </View>
                <View style={styles.View_I1_1909_47_13764}>
                  <Text style={styles.Text_I1_1909_47_13764}>3</Text>
                </View>
              </View>
              <View style={styles.View_I1_1909_47_13765}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69df2ba2-10b1-4f43-9a4c-c17a95a523d9"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13766}
                />
                <View style={styles.View_I1_1909_47_13767}>
                  <Text style={styles.Text_I1_1909_47_13767}>ABC</Text>
                </View>
                <View style={styles.View_I1_1909_47_13768}>
                  <Text style={styles.Text_I1_1909_47_13768}>2</Text>
                </View>
              </View>
              <View style={styles.View_I1_1909_47_13730}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1e6d188-6a89-4686-8a95-b458f82f2765"
                  }}
                  style={styles.ImageBackground_I1_1909_47_13731}
                />
                <View style={styles.View_I1_1909_47_13732}>
                  <Text style={styles.Text_I1_1909_47_13732}> </Text>
                </View>
                <View style={styles.View_I1_1909_47_13733}>
                  <Text style={styles.Text_I1_1909_47_13733}>1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("116%") },
  View_1_1870: {
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
  View_1_1871: {
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
  View_1_1872: {
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
  View_I1_1872_839_7100: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1872_839_7100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_1873: {
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
  View_1_1875: {
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
  View_1_1876: {
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
  ImageBackground_1_1877: {
    width: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1878: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_1_1882: {
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_1_1883: {
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
  View_1_1884: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(46, 46, 76, 1)"
  },
  ImageBackground_1_1885: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_1895: {
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
  View_1_1896: {
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
  View_1_1897: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("17%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_1898: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1_1898: {
    color: "rgba(46, 46, 76, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1899: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("24%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_1900: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1_1900: {
    color: "rgba(46, 46, 76, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1901: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("33%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_1902: {
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
  Text_1_1902: {
    color: "rgba(46, 46, 76, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1903: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1904: {
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
  View_1_1905: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1905: {
    color: "rgba(118, 118, 118, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1906: {
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
  View_1_1907: {
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
  Text_1_1907: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1908: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%"),
    justifyContent: "center"
  },
  Text_1_1908: {
    color: "rgba(84, 81, 79, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1909: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1909_1649_33906: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1909_1649_34874: {
    width: wp("100%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(232, 234, 237, 1)"
  },
  View_I1_1909_1861_21394: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1909_47_13605: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1909_47_13734: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13735: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13736: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13736: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_1649_34557: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1909_47_13606: {
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%")
  },
  ImageBackground_I1_1909_47_13607: {
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_1909_47_13614: {
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I1_1909_47_13615: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  ImageBackground_I1_1909_47_13616: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  ImageBackground_I1_1909_47_13617: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_I1_1909_47_13618: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I1_1909_47_13741: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13742: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13743: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13743: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13744: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13744: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13749: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13750: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13751: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13751: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13752: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13753: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13754: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13755: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13755: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13756: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13756: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13757: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13758: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13759: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13759: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13760: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13760: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13737: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13738: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13739: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13740: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13745: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13746: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13747: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13747: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13748: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13748: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13761: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13762: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13763: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13763: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13764: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13764: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13765: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13766: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13767: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13767: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13768: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13768: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13730: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1909_47_13731: {
    width: wp("32%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1909_47_13732: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13732: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1909_47_13733: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1909_47_13733: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
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
