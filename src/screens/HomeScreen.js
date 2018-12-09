import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  wrapperLogo: {
    flex: 1,
    flexGrow: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonHome: {
    flex: 1,
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 26,
    paddingTop: 26
  },
  buttonHomeText: {
    textAlign: 'center',
    fontSize: 18
  }

})

const assets = {
  background: require('../../assets/background.png'),
  logo: require('../../assets/logo.png')
}

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
