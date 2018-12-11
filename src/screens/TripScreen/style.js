import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  itemName: {
    color: '#000',
    fontWeight: 'bold'
  },
  itemDescription: {
    color: '#000',
    fontSize: 12
  },
  itemPrice: {
      color: '#3531F3'
  },
  header: {
    height: 240,
    backgroundColor: 'gray'
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1
  },
  tripName: {
    color: '#FFF',
    position: 'absolute',
    left: 26,
    bottom: 26
  },
  tripPrice: {
    position: 'absolute',
    bottom: 20,
    right: 26,
    backgroundColor: '#3531F3',
    color: '#FFF',
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 21,
    paddingRight: 21
  },
  
})

export default styles
