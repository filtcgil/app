import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native';

type Props = {
  name: string;
  type: 'folder' | 'file';
  onPress: () => void;
};

export default function FileItemRow({ name, type, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>
          {type === 'folder' ? '📁' : '📄'}
        </Text>
      </View>

      <Text style={styles.label} numberOfLines={2}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '45%',
    margin: '2.5%',
    padding: 12,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    alignItems: 'center'
  },
  icon: {
    marginBottom: 8
  },
  iconText: {
    fontSize: 40
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center'
  }
});
