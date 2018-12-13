import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
    marginRight: 20,
    width: '80%'
  },
  btn: {
    backgroundColor: '#C4C4C4',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  addTripWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }
})

export default styles
