import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const IconButton = ({ onPress, icon, accessibilityLabel, accessibilityHint }) => (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#ccc' : '#fff' }
      ]}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
    >
     <Ionicons size={28} style={[{ marginBottom: -3 }]} name={icon} />
    </Pressable>
  );


const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 9,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default IconButton;
