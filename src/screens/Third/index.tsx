import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Third() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>THIRD PAGE</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
