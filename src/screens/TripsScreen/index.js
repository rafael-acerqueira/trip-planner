import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Trip from './Trip'
class TripsScreen extends Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return <Trip title={item.item.title} price={item.item.price}/>
  }

  render(){
    const trips = [
      { id: '1', title: 'Portugal', price: 'R$2000'},
      { id: '2', title: 'Luxemburgo', price: 'R$15000' }
    ]
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
          <FlatList
            data={trips}
            renderItem={this.renderItem}
            horizontal
            pagingEnabled
            keyExtractor={ item => item.id}
          />
        </View>
      </View>
    )
  }
}

export default TripsScreen
