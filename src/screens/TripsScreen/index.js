import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Trip from './Trip'
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
