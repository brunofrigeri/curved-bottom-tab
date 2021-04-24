import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Secondary() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SECOND PAGE</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
