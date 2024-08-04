import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

type ListComponentProps = {
  title: String;
  percentage: String;
};

export default function DetailBanner({ title, percentage }: ListComponentProps) {

  return (
    <View style={styles.listContainer}>
      <ThemedText type="default">{title}</ThemedText>
      <ThemedText type="default">{percentage}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
    listContainer: {
    padding: 10,
    borderRadius: 9,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D0D0D0'
  },
});
