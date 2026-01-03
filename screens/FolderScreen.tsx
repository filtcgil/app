import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getFolderContents } from '../api/driveApi';
import FolderGridItem from '../components/FolderGridItem';
import EmptyState from '../components/EmptyState';
import { Folder, FileItem } from '../models/Folder';

export default function FolderScreen({ route, navigation }: any) {
  const { folderId } = route.params;
  const [folders, setFolders] = useState<Folder[]>([]);
  const [files, setFiles] = useState<FileItem[]>([]);

  useEffect(() => {
    getFolderContents(folderId).then(({ folders, files }) => {
      setFolders(folders);
      setFiles(files);
    });
  }, [folderId]);

  if (!folders.length && !files.length) return <EmptyState message="Cartella vuota" />;

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
