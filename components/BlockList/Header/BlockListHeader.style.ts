import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 'auto',
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Inter_400Regular",
    color: 'rgb(51 65 85 / 1)'
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: 15,
    backgroundColor: '#F8FAFC',
    borderRadius: 50,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    // borderWidth: 1,
    // borderColor: 'rgb(185 217 235 / 1)',
  },

  searchText: {
    color: 'rgb(51 65 85 / 1)',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    width: '100%',
  },
  restictedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: 10,
  },
  restictedText: {
    color: 'rgb(100 116 139 /  1)',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginLeft: 10,
    opacity: 0.5,
  },
})
