import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import styles from './style'
class TripScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    trip: {},
    points: []
  }

  renderItem = item => {
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.itemName}>{item.item.pointName}</Text>
          <Text style={styles.itemDescription}>{item.item.description}</Text>
        </View>
        <View>
          <Text style={styles.itemPrice}>R$ {parseFloat(item.item.price).toFixed(2)}</Text>
        </View>
      </View>
    )
  }


  componentDidMount() {
    this.loadData()
  }

  loadData = async() => {
    const id = this.props.navigation.state.params.id
    const tripsAS = await AsyncStorage.getItem('trips')
    let trips = []
    if(tripsAS){
      trips = JSON.parse(tripsAS)
    }

    let trip = {}
    trips.forEach( t => {
      if(t.id === id){
        trip = t
      }
    })

    const pointsAS = await AsyncStorage.getItem('trip-' + id)
    let points = []

    if(pointsAS){
      points = JSON.parse(pointsAS)
    }

    this.setState({ trip, points })
  }


  render(){
    const id = this.props.navigation.state.params.id
    return(
      <View style={{ flex: 1 }}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.state.params.refresh(),
            this.props.navigation.goBack()
          }}>
            <Image source={require('../../../assets/arrow-left-white.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.tripName}>{this.state.trip.name}</Text>
          <Text style={styles.tripPrice}>R$ {parseFloat(this.state.trip.price).toFixed(2)}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddPoint', { id, refresh: this.loadData })}
            style={{
              position: 'absolute',
              right: 0,
              top: 14,
              padding: 10
            }}
          >
            <Image source={require('../../../assets/add.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{
            flex: 1,
            paddingTop: 15

          }}
          data={this.state.points}
          renderItem={this.renderItem}
          keyExtractor={ item => item.id.toString() }
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
