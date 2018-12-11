import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'
import isIphoneX from '../../utils/isIphoneX'

class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    show: false
  }

  handleClick = () => {
    this.setState({ show: !this.state.show })
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
            <TouchableWithoutFeedback onPress={this.handleClick}>
              <View style={[styles.buttonHome, isIphoneX() ? { paddingBottom: 32 } : null]}>
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
                <Image source={assets.arrow} style={isIphoneX() ? { marginBottom: 16 } : null }/>
              </View>
            </TouchableWithoutFeedback>
        }

      </ImageBackground>
    )
  }
}

export default HomeScreen
