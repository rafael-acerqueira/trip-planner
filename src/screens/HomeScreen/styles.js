import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  wrapperLogo: {
    flex: 1,
    flexGrow: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonHome: {
    flex: 1,
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 26,
    paddingTop: 26
  },
  buttonHomeText: {
    textAlign: 'center',
    fontSize: 18
  },
  buttonEmptyState: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingBottom: 26,
    paddingTop: 26
  },
  buttonEmptyStateText: {
    textAlign: 'center',
    fontSize: 18,
    width: '60%'
  }

})
