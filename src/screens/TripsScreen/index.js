import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Trip from './Trip'
class TripsScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <View style={{
        flex: 1,
        justifyContent: 'space-between'
      }}>
        <View  style={{
          backgroundColor: 'blue',
          flex: 1
        }}>
          <Text> Map </Text>
        </View>
        <View style={{
          backgroundColor: 'green'
        }}>
          <Trip />
        </View>
      </View>
    )
  }
}

export default TripsScreen
