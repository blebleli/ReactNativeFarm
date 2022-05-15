import React from "react";
import { SafeAreaView, View,StyleSheet, TextInput, TouchableOpacity,Text,Image,Alert } from "react-native";

const LoginView = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const onPress = () =>
    Alert.alert("Alert Title",
                "My Alert Msg",)
  return (
<SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Image
            source={ require('../image/loginIDButton.png')}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your ID Here"
            placeholderTextColor = "white"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.sectionStyle}>
          <Image
            source={ require('../image/loginPWButton.png')}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Password Here"
            placeholderTextColor = "white"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.loginButtonStyle}>
            <TouchableOpacity
             style={styles.loginButton}
             onPress={onPress}
             >
               <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2F0D9',
    height: 40,
    borderRadius: 6,
    margin: 10,
  },
  loginButtonStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92D050',
      height: 40,
      borderRadius: 6,
      margin: 10,
    },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  loginButton: {
    flex: 1,
    alignItems: "center",
  },
  loginText: {
    color : 'white',
    fontWeight: 'bold'
  }


});

export default LoginView;