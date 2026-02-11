import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { usePathname, useRouter } from "expo-router";

export default function FloatingTabMain() {
  const router = useRouter();
  const pathName = usePathname();
  const insets = useSafeAreaInsets();

  const style = styles({ insets });


  return (
    <View style={style.container}>
      <TouchableOpacity style={style.touch} onPress={() => router.replace('/')} >
        <FontAwesome name="home" size={26} color={`${pathName === '/' ? '#1E293' : '#747E82'}`} />
      </TouchableOpacity>
      <TouchableOpacity style={style.touch} onPress={() => router.replace('/block-list')} >
        <FontAwesome name="list-ul" size={24} color={`${pathName === '/block-list' ? '#1E293' : '#747E82'}`} />
      </TouchableOpacity>
      <TouchableOpacity style={style.touch} onPress={() => router.replace('/schedule')} >
        <Ionicons name="calendar-clear" size={24} color={`${pathName === '/schedule' ? '#1E293' : '#747E82'}`} />
      </TouchableOpacity>
      <TouchableOpacity style={style.touch} onPress={() => router.replace('/journey')} >
        <MaterialIcons name="landscape" size={32} color={`${pathName === '/journey' ? '#1E293' : '#747E82'}`} />
      </TouchableOpacity>
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
  touch: {
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  }
});

