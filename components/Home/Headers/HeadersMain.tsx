import { View } from 'react-native';
import { Avatar } from '@kolking/react-native-avatar';
import styles from './Headers.styles';
import { Text } from '@react-navigation/elements';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HeadersMain() {
  const userName = 'Charan';
  const getTimedGreeting = (): string => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileFlex}>
        <Avatar name={userName} colorize={true} />
        <View>
          <Text style={styles.textName}>{userName.toUpperCase()}</Text>
          <Text style={styles.textGreeting}>{getTimedGreeting()}</Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <Ionicons name="notifications" size={24} color="#334155" />
      </View>
    </View>
  );
}

