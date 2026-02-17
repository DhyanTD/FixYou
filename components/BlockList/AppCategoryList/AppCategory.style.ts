import { StyleSheet } from "react-native";

export default StyleSheet.create({

  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgb(148 163 184 /1)',
    letterSpacing: 1.2,
    marginBottom: 10,
    marginLeft: 4,
    fontFamily: 'Inter_400Regular',
  },

  card: {
    // overflow: 'hidden',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderBottomWidth: 1,
  },


  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  iconEmoji: {
    fontSize: 22,
  },

  info: {
    flex: 1,
  },
  appName: {
    fontSize: 14,
    color: 'rgb(51 65 85 /1)',
    marginBottom: 2,
    fontFamily: 'Inter_400Regular',
    fontWeight: 700,
    opacity: 0.8,
  },
  usage: {
    fontSize: 13,
    color: 'rgb(148 163 184 / 1)',
    fontWeight: '400',
  },
  usageActive: {
    color: 'red',
  },
});
