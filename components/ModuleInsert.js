// components/TodoInsert.js
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';

const TodoInsert = () => {
  return (
     <TouchableOpacity
         style={[styles.plusButton]}
         onPress={() => Alert.alert('Cannot press this one')}
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
        backgroundColor: "aliceblue",
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    plusLabel : {
        color : "white",
    },
});

export default TodoInsert;
