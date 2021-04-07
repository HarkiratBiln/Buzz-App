import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FacebookScreen extends React.Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.displayText}>
                    FACEBOOK
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    displayText: {
        fontSize: 40,
        fontFamily: "mordenlove",
        color: "#3b5998",
        fontWeight: "bold"
    }
  });