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
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1
  },
  input: {
    backgroundColor: '#C4C4C4',
    marginTop: 20,
    height: 44,
    paddingLeft: 20,
    marginLeft: 20,
    marginRight: 20
  },
  btn: {
    backgroundColor: '#C4C4C4',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default styles
