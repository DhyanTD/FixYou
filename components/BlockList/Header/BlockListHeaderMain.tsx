import { Text } from '@react-navigation/elements';
import { TextInput, View } from 'react-native';
import styles from './BlockListHeader.style';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function BlockListHeaderMain() {
  const [search, setSearch] = React.useState('');
  function handleSearchChange(e?: string) {
    setSearch(e ?? '');
  }
  return (
    <View >
      <View style={styles.container}>
        <View />
        <Text style={styles.header}>Block List</Text>
        <FontAwesome6 name="droplet" size={24} color="rgb(185 217 235 /1)" />
      </View>

      <View style={styles.searchBar}>
        <EvilIcons name="search" size={32} color="rgb(185 217 235 /1)" />
        <TextInput
          placeholder="Find an app ..."
          onChangeText={(e) => handleSearchChange(e)}
          value={search}
          style={styles.searchText}
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.restictedContainer}>
        <Text style={styles.restictedText}>8 apps currently restircted</Text>
      </View>

    </View>
  );
}

