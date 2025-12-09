import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet,Dimensions } from "react-native";
import { Link } from "expo-router";
import {appStyles} from "../utilities/mainstyles"
const screenWidth = Dimensions.get("window")


export default function Index (){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={appStyles.areaView}>
        {/* header*/}
        <View style={appStyles.HeaderView}>
          <Text style={appStyles.Appname}>Stitch flow</Text>
          <Text style={appStyles.introtext}>your fashion partner</Text>
        </View >
        {/* body */}
        <View style={appStyles.imgView}>
          <Image 
          source={require("../assets/images/stitchlg.png")}
          style={myStyles.logo}

          
          />
          <View style={myStyles.intro}>
            <Text style={appStyles.introtext2}>when you choose Stitch flow fashion, you're choosing ease, comfort and realiability</Text>
          </View>
          {/* bttom */}
          <View style={{paddingHorizontal:30}}>
            <Link href="/(tabs)/homepage">
           <View style={appStyles.getstartedview}><Text style={appStyles.linktext}>GET STARTED</Text></View>
            </Link>
          </View>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const myStyles = StyleSheet.create({
  logo:{
    width:screenWidth,
    height:420,
    paddingVertical:30,
    backgroundColor:"white",
    resizeMode:"contain",

  },
  
})