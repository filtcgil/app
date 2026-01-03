import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
  message: string;
};

export default function EmptyState({ message }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 },
  text: { color: '#64748b', textAlign: 'center' },
});
