import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import Trip from './Trip'
import isIphoneX from '../../utils/isIphoneX'

class TripsScreen extends Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return <Trip onPress={() => this.props.navigation.navigate('Trip')} name={item.item.name} price={item.item.price}/>
  }

  render(){
    const trips = [
      { id: '1', name: 'Portugal', price: 'R$2000'},
      { id: '2', name: 'Luxemburgo', price: 'R$15000' }
    ]
    return(
      <View style={{
        flex: 1,
        justifyContent: 'space-between'
      }}>
        <View  style={{
          flex: 1
        }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddPoint')}
            style={{
              position: 'absolute',
              right: 17,
              top: 14,
              padding: 10
            }}
          >
            <Image source={require('../../../assets/add.png')} />
          </TouchableOpacity>
        </View>
        <View style={{
          backgroundColor: 'green'
        }}>
          <FlatList
            data={trips}
            renderItem={this.renderItem}
            horizontal
            pagingEnabled
            keyExtractor={ item => item.id}
            style={[
              isIphoneX() ? { marginBottom: 20 } : null
            ]}
          />
        </View>
      </View>
    )
  }
}

export default TripsScreen
