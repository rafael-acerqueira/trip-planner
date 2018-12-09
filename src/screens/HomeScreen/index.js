import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {

  state = {
    show: true
  }

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
        {
          !this.state.show ?
            <TouchableWithoutFeedback>
              <View style={styles.buttonHome}>
                <Text style={styles.buttonHomeText}>COMEÇAR!</Text>
              </View>
            </TouchableWithoutFeedback>
          :
            <TouchableWithoutFeedback>
              <View style={styles.buttonEmptyState}>
                <Image source={assets.pin} />
                <Text style={styles.buttonEmptyStateText}>
                  Vamos planejar a sua primeira viagem?
                </Text>
                <Image source={assets.arrow} />
              </View>
            </TouchableWithoutFeedback>
        }

      </ImageBackground>
    )
  }
}

export default HomeScreen
