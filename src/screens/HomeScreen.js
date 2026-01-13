import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getDriveFolders } from '../services/DriveService';

export default function HomeScreen() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    async function loadFolders() {
      const data = await getDriveFolders();
      setFolders(data);
    }
    loadFolders();
  }, []);

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text>Cartelle disponibili:</Text>
      <FlatList
        data={folders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
