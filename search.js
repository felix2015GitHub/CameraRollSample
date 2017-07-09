'use strict';
 
// var React = require('react-native');
// import React from 'react-native';
import React, { Component } from 'react';
 
// var {
//     StyleSheet,
//     View,
//     Text,
//     Component
//    } = React;
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';
 
var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
class Search extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
  	    <View style={styles.container}>
	        <Text style={styles.description}>
        	  Search Tab
	        </Text>
	    </View>
        );
    }
}
 
// module.exports = Search;
export default Search;