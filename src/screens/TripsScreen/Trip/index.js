import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import styles from './styles'

const Trip = props => {
  const dim = Dimensions.get('window')
  return(
    <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
      <View style={[ styles.wrapperImage, { width: dim.width - 32 }]}>
        <Text>Image</Text>
      </View>
      <Text>{props.name}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </TouchableOpacity>
  )
}

export default Trip
