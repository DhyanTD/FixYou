import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  profileFlex: {
    flex: 1,
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  }
  , textGreeting: {
    fontSize: 16,
    color: '#334155',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  textName: {
    fontSize: 12,
    color: '#8989A1',
    fontWeight: 'bold',
    letterSpacing: 3,
  },

  notificationContainer: {
    backgroundColor: '#F8FAFC',
    borderRadius: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 40,
    justifyContent: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
});

