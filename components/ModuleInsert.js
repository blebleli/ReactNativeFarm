// components/TodoInsert.js
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ModuleInsert = ({ navigation }) => {
  return (
     <TouchableOpacity
         style={[styles.plusButton]}
         onPress={() => navigation.navigate('Details')}
     >
     <Text
         style={[
             styles.plusLabel,
         ]}
     >
         {'ADD +'}
     </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    plusButton: {
        backgroundColor: "skyblue",
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        minHeight: "20%",
        textAlign: "center",
    },
    plusLabel : {
        fontSize: 20,
        fontWeight: "500",
        color : "white",
    },
});

export default ModuleInsert;
