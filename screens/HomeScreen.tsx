import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FolderGridItem from '../components/FolderGridItem';
import EmptyState from '../components/EmptyState';
import { getRootFolders } from '../api/driveApi';
import { Folder } from '../models/Folder';

export default function HomeScreen({ navigation }: any) {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRootFolders()
      .then(setFolders)
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={folders}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <FolderGridItem
            name={item.name}
            onPress={() =>
              navigation.navigate('Folder', {
                folderId: item.id,
                title: item.name
              })
            }
          />
        )}
        ListEmptyComponent={
          !loading ? (
            <EmptyState message="Nessuna cartella disponibile" />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff'
  }
});
