import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import Inicio from "./screens/inicio";

// or any files within the Snack



export default class App extends Component {
  
  render(){
    return <Inicio/>;   
  } 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});