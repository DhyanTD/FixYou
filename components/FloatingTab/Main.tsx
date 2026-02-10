import { StyleSheet, Text, View } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

export default function FloatingTabMain() {
  const insets = useSafeAreaInsets();
  const style = styles({ insets });
  return (
    <View style={style.container}>
      <Text style={style.text}>Home</Text>
      <Text style={style.text}>Schedule</Text>
      <Text style={style.text}>Settings</Text>
      <Text style={style.text}>Profile</Text>
    </View>
  )
}

const styles = ({ insets }: { insets: EdgeInsets }) => StyleSheet.create({
  container: {
    bottom: insets.bottom + 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    // padding: 20,
    backgroundColor: '#F8FAFC',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    height: 70,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#334155',
  },
});

