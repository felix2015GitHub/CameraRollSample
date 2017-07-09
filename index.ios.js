'use strict';
 
// var React = require('react-native');
// var Featured = require('./Featured');
// var Search = require('./Search');
// import React, { Component } from 'react';
import React, { Component } from 'react';
import CameraRollView from './cameraroll';
import Search from './search';
 
// var {
//     AppRegistry,
//     TabBarIOS,
//     Component
//    } = React;
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

console.disableYellowBox = true;
 
export default class BookSearch extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'cameraroll'
        };
    }
 
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'cameraroll'}
                    systemIcon='favorites'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'cameraroll'
                        });
                    }}>
                    <CameraRollView/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    systemIcon='search'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
 
AppRegistry.registerComponent('BookSearch', () => BookSearch);