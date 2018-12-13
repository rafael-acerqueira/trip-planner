import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
class AddTripScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    trip: ''
  }

  render(){
    return(
      <View style={styles.addTripWrapper}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../../assets/arrow-left-white.png')} />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder='Nome da Viagem' onChangeText={(txt => this.setState({ trip: txt }))} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddTripScreen
