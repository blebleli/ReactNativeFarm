
import React from 'react';
import { TouchableOpacity,View, Image,Text, StyleSheet,Dimensions,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import LoginLogo from './components/LoginLogo';
import LoginView from './components/LoginView';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
     width: windowWidth,
     height: windowHeight,

     alignItems: 'center',
  },
  logo: {
    margin : 100,
    width  : 165,
    height : 308
  },
});


function HomeScreen({ navigation }) {
  return (
         <TouchableOpacity
               style={[styles.container]}
               onPress={() => this.props.navigation.navigate('About')}
         >
         <ImageBackground
                source={ require('./image/login_background.png')}
                resizeMode="cover"
                style={[styles.container]}>
              <Image  style={styles.logo}
                   source={ require('./image/login_logo.png')}
                 />
        </ImageBackground>
       </TouchableOpacity>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//const App = () => {
//  return (
//     <TouchableOpacity
//           style={[styles.container]}
//           onPress={() => navigation.navigate('Details')}
//     >
//      <Image
//        style={styles.logo}
//        source={ require('./image/login_image.png')
//          }
//      />
//
//   </TouchableOpacity>
//  );
//}

export default App;