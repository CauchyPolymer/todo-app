import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>HYEB TO DO</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholders={"New to do"}/>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title: {
    color:'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: "600",
    marginBottom: 30
  },
  card:{
    backgroundColor:'white',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: width - 25,
    ...Platform.select({
      ios:{
        shadowColor : "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset:{
          height:-1,
          width:0
        }
      },
      android: {
        elevation: 3
      }
    })
  }
});
