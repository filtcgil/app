import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type Props = {
  name: string;
  onPress: () => void;
};

export default function FolderGridItem({ name, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.folderIcon}></View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  folderIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#2563eb',
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    textAlign: 'center',
    fontWeight: '600',
  },
});
