import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginVertical: 10,
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: 20,
    // boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  iconContainer: {
    padding: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9'
  },

  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    fontFamily: 'Inter_400Regular'
  },
});
