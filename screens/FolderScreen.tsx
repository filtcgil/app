import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FolderGridItem from '../components/FolderGridItem';
import EmptyState from '../components/EmptyState';
import { getFolderContents } from '../api/driveApi';
import { Folder, FileItem } from '../models/Folder';

type DriveItem = (Folder | FileItem) & {
  type: 'folder' | 'file';
};

export default function FolderScreen({ route, navigation }: any) {
  const { folderId, title } = route.params;

  const [items, setItems] = useState<DriveItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({ title });

    getFolderContents(folderId)
      .then(({ folders, files }) => {
        const merged: DriveItem[] = [
          ...folders.map(f => ({ ...f, type: 'folder' })),
          ...files.map(f => ({ ...f, type: 'file' }))
        ];
        setItems(merged);
      })
      .finally(() => setLoading(false));
  }, [folderId, title, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <FolderGridItem
            name={item.name}
            isFile={item.type === 'file'}
            onPress={() => {
              if (item.type === 'folder') {
                navigation.push('Folder', {
                  folderId: item.id,
                  title: item.name
                });
              } else {
                // STEP 5 → apertura / download file
              }
            }}
          />
        )}
        ListEmptyComponent={
          !loading ? <EmptyState message="Cartella vuota" /> : null
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
