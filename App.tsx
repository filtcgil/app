import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>UnionHub</Text>
      <Text style={styles.subtitle}>
        Build automatico APK da GitHub Actions
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 26,
    fontWeight: '700'
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b'
  }
});
