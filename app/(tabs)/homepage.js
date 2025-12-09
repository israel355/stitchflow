import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet,Dimensions,FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { eventData } from "../../assets/images/localdata/fashionstyle";
import {appStyles} from "../../utilities/mainstyles"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from "expo-font";


function ImageSeprator(){
    return(
        <View style={{width:"100", height:50}}>

        </View>
    )
}


export default function Homepage(){
    const [fontLoaded] = useFonts({
        "AvegasRoyale-Bold":require("../../assets/fonts/AvegasRoyale-Bold.ttf"),
        "AvegasRoyale-Regular":require("../../assets/fonts/AvegasRoyale-Regular.ttf"),
        "Paterna":require("../../assets/fonts/Paterna.otf"),
        "ReilycElegantDemo-Regular":require("../../assets/fonts/ReilycElegantDemo-Regular.otf"),
        
    })
    if(!fontLoaded){
        return null
    };

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <View style={appStyles.HeaderView}><Text style={appStyles.headerText} >DESIGN GALLARY</Text></View>
                    <View >
                        <FlatList
                        data={eventData}
                        ItemSeparatorComponent={ImageSeprator}

                       renderItem={({item}) => {
                        return(
                            <View style={{paddingHorizontal:4}}>
                                <Image
                                source={item.imgurl}
                                style={appStyles.flatimg}
                                />
                               <View style={appStyles.iconView}>
                                <Text style={appStyles.designerName}> Designer: {item.designer} </Text>
                                <View style={appStyles.iconDisplay}>
                                    <TouchableOpacity>
                                        <AntDesign name="heart" size={24} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign name="comment" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                               </View>

                            
                        )
                       }}
                        />

                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
    
