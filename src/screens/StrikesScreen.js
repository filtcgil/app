import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchStrikes } from '../services/StrikesService';

const StrikesScreen = () => {
  const [strikes, setStrikes] = useState([]);

  useEffect(() => {
    fetchStrikes()
      .then((data) => setStrikes(data))
      .catch((err) => console.error("Error fetching strikes:", err));
  }, []);

  return (
    <View>
      <Text>Scioperi</Text>
      <FlatList
        data={strikes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StrikesScreen;
