import React, { Component } from 'react';
import { TouchableOpacity,View, Image,Text, StyleSheet,Dimensions,ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class LoginLogo extends Component {
  render() {
    return (
         <TouchableOpacity
                 style={[styles.container]}
                 onPress={() => this.props.navigation.navigate('LoginView')}
           >
           <ImageBackground
                  source={ require('../image/login_background.png')}
                  resizeMode="cover"
                  style={[styles.container]}>
                <Image  style={styles.logo}
                     source={ require('../image/login_logo.png')}
                   />
          </ImageBackground>
         </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     width: windowWidth,
     height: windowHeight,

     alignItems: 'center',
  },
  logo: {
    margin : 100,
    width: 165,
    height: 308
  },
});