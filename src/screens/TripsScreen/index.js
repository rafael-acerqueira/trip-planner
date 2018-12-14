import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import MapView from 'react-native-maps'
import Trip from './Trip'
import isIphoneX from '../../utils/isIphoneX'

class TripsScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    trips: []
  }

  componentDidMount(){
    this.loadData()
  }

  loadData = async() => {
    const tripsAS = await AsyncStorage.getItem('trips')
    let trips = []
    if(tripsAS){
      trips = JSON.parse(tripsAS)
    }

    this.setState({ trips })
  }

  renderItem = item => {
    return <Trip onPress={() => this.props.navigation.navigate('Trip', { id: item.item.id, refresh: this.loadData })} name={item.item.name} price={item.item.price}/>
  }

  render(){
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
            onPress={() => this.props.navigation.navigate('AddTrip', { refresh: this.loadData })}
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
            data={this.state.trips}
            renderItem={this.renderItem}
            horizontal
            pagingEnabled
            keyExtractor={ item => item.id.toString()}
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
