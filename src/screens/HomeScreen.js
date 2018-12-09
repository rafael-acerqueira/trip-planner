import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'

class HomeScreen extends Component {
  render(){
    return(
      <ImageBackground
        source={require('../../assets/background.png')}
        imageStyle={{ resizeMode: 'stretch'}}
        style={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'space-between'
        }}
      >
        <View style={{
          flex: 1,
          flexGrow: 2,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <TouchableWithoutFeedback>
          <View style={{
            flex: 1,
            flexGrow: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            paddingBottom: 26,
            paddingTop: 26
          }}>
            <Text style={{
              textAlign: 'center',
              fontSize: 18
            }}>
              COMEÇAR!
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }
}

export default HomeScreen
