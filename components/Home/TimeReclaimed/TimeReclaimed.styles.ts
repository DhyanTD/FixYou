import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  }
  , text1: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    color: 'rgb(51 65 85 / 0.6)',
    fontSize: 24,
    textAlign: 'center',
  },

  text2: {
    fontFamily: 'Inter_400Regular',
    color: 'rgb(51 65 85 /  1)',
    fontSize: 60,
    textAlign: 'center',
  },

  progressBlock: {
    gap: 8,
    backgroundColor: '#F8FAFC',
    flexDirection: 'row',
    alignItems: 'center',
    // height: 50,
    // width: 300,
    justifyContent: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',

    // alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginHorizontal: 'auto',

  },
  text3: {
    fontFamily: 'Inter_400Regular',
    color: 'rgb(51 65 85 / 0.6)',
    fontSize: 16,
    fontWeight: 600,
  },
})
