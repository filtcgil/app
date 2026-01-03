import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FolderGridItem from '../components/FolderGridItem';
import EmptyState from '../components/EmptyState';
import { getRootFolders } from '../api/driveApi';
import { Folder } from '../models/Folder';

export default function HomeScreen({ navigation }: any) {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    getRootFolders().then(setFolders);
  }, []);

  if (!folders.length) return <EmptyState message="Nessuna cartella disponibile" />;

  return (
    <View style={styles.container}>
      <FlatList
        data={folders}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <FolderGridItem
            name={item.name}
            onPress={() => navigation.push('Folder', { folderId: item.id, title: item.name })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 10 } });
