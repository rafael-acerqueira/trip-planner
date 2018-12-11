import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './style'
class TripScreen extends Component {

  static navigationOptions = {
    header: null
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
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../../assets/arrow-left-white.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.tripName}>{trip.name}</Text>
          <Text style={styles.tripPrice}>{trip.price}</Text>
        </View>
        <FlatList
          style={{
            flex: 1,
            paddingTop: 15

          }}
          data={trip.places}
          renderItem={this.renderItem}
          keyExtractor={ item => item.id}
          contentContainerStyle = {{
            paddingBottom: 15,
            paddingLeft: 12,
            paddingRight: 12
          }}
        />
      </View>
    )
  }
}

export default TripScreen
