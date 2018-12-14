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

  handleItemChange = info => {
    const { viewableItems } = info

    if(viewableItems && viewableItems.length > 0){
      const[item] = viewableItems
      this.map.animateToRegion(
        this.regionFrom(item.item.latitude, item.item.longitude, 1000),
        4000
      )
    }
  }

  regionFrom = (lat, lon, distance) => {
      distance = distance/2
      const circumference = 40075
      const oneDegreeOfLatitudeInMeters = 111.32 * 1000
      const angularDistance = distance/circumference

      const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
      const longitudeDelta = Math.abs(Math.atan2(
              Math.sin(angularDistance)*Math.cos(lat),
              Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

      return result = {
          latitude: lat,
          longitude: lon,
          latitudeDelta,
          longitudeDelta,
      }
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
            ref={ref => this.map = ref}
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
            onViewableItemsChanged={this.handleItemChange}

          />
        </View>
      </View>
    )
  }
}

export default TripsScreen
