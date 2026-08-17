import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { pingApi } from '../services/api.js';

export default function HomeScreen() {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    pingApi()
      .then((data) => setStatus(data.message))
      .catch(() => setStatus('backend unreachable'));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mobile app is running</Text>
      <Text>API status: {status}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
});
