'use strict';
 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Modal,
  Text,
  View,
  Image,
  TextInput,
  Button,
  CameraRoll,
  Dimensions,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
 
const { width } = Dimensions.get('window')

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  shareButton: {
    position: 'absolute',
    // width,
    padding: 10,
    bottom: 0,
    left: 0
  }
})
 
class CameraRollView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            photos: [],
            index: null,
            count: 20
        }
        this.getPhotos = this.getPhotos.bind(this);
        this.dateProccess = this.dateProccess.bind(this);
        this.proccessData = this.proccessData.bind(this);
    }
    componentWillMount(){
        this.getPhotos();
    }
    dateProccess(date){
        var that = this,
            mon = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"],
            today = Common.toDateByYMD("today"),
            getDate = Common.toDateByYMD(date);

        if(getDate.split("/")[0] === today.split("/")[0]){
          if(getDate.split("/")[1] === today.split("/")[1]){
            if(getDate.split("/")[2] === today.split("/")[2]){
              return "Today";
            }else{
              if(parseInt(getDate.split("/")[2], 10) === parseInt(today.split("/")[2], 10)-1){
                return "Yesterday";
              }else{
                return mon[parseInt(getDate.split("/")[1], 10)-1];
              }
            }
          }else{
            return mon[parseInt(getDate.split("/")[1], 10)-1];
          }
        }else{
          return " "+getDate.split("/")[0];
        }
    }
    setIndex = (index) => {
        if (index === this.state.index) {
          index = null
        }
        this.setState({ index })
    }

    proccessData = (data) => {
        this.setState({ photos: data.edges });
        if(data.page_info.has_next_page==true && this.state.count < 500){
            this.setState({ count: this.state.count>100?this.state.count+100:this.state.count+20 });
            this.getPhotos();
        }
    }

    getPhotos = () => {
        CameraRoll.getPhotos({
            first: this.state.count,
            assetType: 'All'
        })
        .then(r => this.proccessData(r))
        // .then(r => console.log(r))
        // .then(r => this.setState({ photos: r.edges }))
    }
    render() {
        return (
          <View style={styles.modalContainer}>
            <ScrollView
              contentContainerStyle={styles.scrollView}>
              {
                this.state.photos.map((p, i) => {
                  return (
                    <TouchableHighlight
                      style={{opacity: i === this.state.index ? 0.5 : 1}}
                      key={i}
                      underlayColor='transparent'
                      onPress={() => this.setIndex(i)}
                    >
                      <Image
                        style={{
                          width: width/5,
                          height: width/5
                        }}
                        source={{uri: p.node.image.uri}}
                      />
                    </TouchableHighlight>
                  )
                })
              }
            </ScrollView>
            {
              this.state.index !== null  && (
                <View style={styles.shareButton}>

                </View>
              )
            }
          </View>       
        )
    }
}
 
export default CameraRollView;