import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import TripsScreen from './src/screens/TripsScreen'
import TripScreen from './src/screens/TripScreen'
import AddPointScreen from './src/screens/AddPointScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen,
  Trip: TripScreen,
  AddPoint: AddPointScreen
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator )
