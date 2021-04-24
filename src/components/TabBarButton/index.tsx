import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TabBarButtonProps {
  props?: BottomTabBarButtonProps;
}

export default function TabBarButton({}: TabBarButtonProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 999,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});
