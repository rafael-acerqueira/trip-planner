import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import styles from './style'

class AddTripScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    name: ''
  }

  handleSave = async() => {
    const trip = {
      id: new Date().getTime(),
      name: this.state.name,
      price: 0,
      latitude: 0,
      longitude: 0
    }

    const tripsAS = await AsyncStorage.getItem('trips')
    let trips = []

    if(tripsAS){
      trips = JSON.parse(tripsAS)
    }
    trips.push(trip)

    await AsyncStorage.setItem('trips', JSON.stringify(trips))

    this.props.navigation.state.params.refresh()
    this.props.navigation.navigate('AddPoint', { id: trip.id })

    //this.props.navigation.goBack()
  }

  render(){
    return(
      <View style={styles.addTripWrapper}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../../assets/arrow-left-white.png')} />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder='Nome da Viagem' onChangeText={(txt => this.setState({ name: txt }))} />
        <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddTripScreen
