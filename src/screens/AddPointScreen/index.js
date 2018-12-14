import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import styles from './style'
class AddPointScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    id: new Date().getTime(),
    position: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    pointName: '',
    description: '',
    price: 0
  }

  handleSave = async() => {
    const id = this.props.navigation.state.params.id
    const pointsAS = await AsyncStorage.getItem('trip-' + id)
    let points = []

    if(pointsAS){
      points = JSON.parse(pointsAS)
    }

    points.push(this.state)
    await AsyncStorage.setItem('trip-' + id, JSON.stringify(points))

    let total = 0
    points.forEach( p => {
      total += p.price
    })
    const tripsAS = await AsyncStorage.getItem('trips')
    let trips = []
    if(tripsAS){
      trips = JSON.parse(tripsAS)
    }

    let trip = {}
    trips.forEach( (trip, index) => {
      if(trip.id === id){
        trips[index].price = total
        trips[index].latitude = points[0].position.latitude
        trips[index].longitude = points[0].position.longitude
      }
    })

    await AsyncStorage.setItem('trips', JSON.stringify(trips))
    this.props.navigation.state.params.refresh()
    this.props.navigation.goBack()
  }

  render(){
    return(
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}

            onDragEnd={
              (event) => this.setState({ position: event.nativeEvent.coordinate })
            }

            draggable
          />

        </MapView>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../../assets/arrow-left-white.png')} />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder='Nome do local' onChangeText={(txt => this.setState({ pointName: txt }))} />
        <TextInput style={styles.input} placeholder='Descrição' onChangeText={(txt => this.setState({ description: txt }))} />
        <TextInput style={styles.input} placeholder='Valor R$' onChangeText={(txt => this.setState({ price: parseFloat(txt) }))} />
        <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddPointScreen
