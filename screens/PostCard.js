import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons"

export default class PostCard extends React.Component(){

   constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() { }
  
    render(){
        return(
         <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View>
                    <View>
                      <Image
                         source={require("../assets/profile_img.png")}
                      >
                      </Image>
                    </View>
                    <View>
                        <Text>{this.props.post.author}</Text>
                    </View> 
                </View>
                <Image source={require("../assets/post.jpeg")}/>
                <View>
                 <Text>
                    {this.props.post.caption}
                 </Text>
                </View>
                <View>
                   <View>
                        <Ionicons name={"heart"} size={RFValue (30)} color={"white"}/>
                        <Text>12k</Text>
                   </View>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor: "black"
    },
    droidSafeArea: {
       marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle:{
       flex:0.07,
       flexDirection: "row"
    },
    appIcon: {
       flex:0.2,
       justifyContent:"center",
       alignItems:"center"
    },
    iconImage:{
      width:"100%",
      height:"100%",
      resizeMode:"contain"
    },
    appTitleTextContainer:{
       flex:0.8,
       justifyContent:"center"
    },
    appTitleText:{
       color:"white",
       fontSize: RFValue(28)
    },
    cardContainer:{
        flex:0.85
    }
})