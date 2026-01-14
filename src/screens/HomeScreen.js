import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { fetchDriveFolders } from '../services/DriveService'; // servizio per recuperare cartelle

const HomeScreen = () => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchDriveFolders()
      .then((data) => {
        setFolders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching folders:", err);
        setLoading(false);
      });
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      {loading ? <Text>Loading...</Text> : (
        <FlatList
          data={folders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <Button title="Open" onPress={() => console.log('Open Folder')} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
