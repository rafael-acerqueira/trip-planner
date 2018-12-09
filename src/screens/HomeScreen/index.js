import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {
  render(){
    return(
      <ImageBackground
        source={assets.background}
        imageStyle={{ resizeMode: 'stretch'}}
        style={styles.background}
      >
        <View style={styles.wrapperLogo}>
          <Image source={assets.logo} />
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.buttonHome}>
            <Text style={styles.buttonHomeText}>
              COMEÇAR!
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }
}

export default HomeScreen
