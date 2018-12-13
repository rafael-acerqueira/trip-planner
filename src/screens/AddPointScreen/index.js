import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import styles from './style'
class AddPointScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    position: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    pointName: '',
    description: '',
    price: 0
  }

  renderItem = item => {
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.itemName}>{item.item.name}</Text>
          <Text style={styles.itemDescription}>{item.item.description}</Text>
        </View>
        <View>
          <Text style={styles.itemPrice}>{item.item.price}</Text>
        </View>
      </View>
    )
  }

  render(){
    const trip = {
      name: 'Eurotrip 2019',
      price: 'R$ 35000',
      places: [
        { id: '1', name: 'Portugal', description: 'Bonde', price: 100, lat: 0, long: 0 },
        { id: '2', name: 'Espanha', description: 'Chegada', price: 300, lat: 0, long: 0 },
        { id: '3', name: 'Bruxelas', description: 'City Tour', price: 500, lat: 0, long: 0}
      ]
    }
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
        <TextInput style={styles.input} placeholder='Valor R$' onChangeText={(txt => this.setState({ price: txt }))} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddPointScreen
