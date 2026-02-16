import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#A5C3D9',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  iconContainer: {
    marginBottom: 4,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F8FAFC',
    letterSpacing: 0.3,
    fontFamily: 'Inter_400Regular',
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '500',
    color: '#F8FAFC',
    letterSpacing: 2,
    opacity: 0.9,
    fontFamily: 'Inter_400Regular',

  },
});
