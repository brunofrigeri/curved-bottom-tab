import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function First() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>FIRST PAGE</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
