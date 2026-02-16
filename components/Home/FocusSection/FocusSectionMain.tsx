import { View, Text, TouchableOpacity } from 'react-native';
import styles from './FocusSection.styles';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function FocusSessionMain() {
  const handlePress = () => {
    console.log('Start Focus');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      // activeOpacity={0.8}
      >

        <View style={styles.iconContainer}>
          <AntDesign name="hourglass" size={24} color="#F8FAFC" />
          <Text style={styles.title}>Start Focus Session</Text>
        </View>
        <Text style={styles.subtitle}>FIND YOUR STILLNESS</Text>
      </TouchableOpacity>
    </View>
  );
}


