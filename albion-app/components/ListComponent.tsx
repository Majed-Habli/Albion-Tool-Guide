import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ListComponentProps = {
  title: String;
  percentage: String;
};

export default function DetailBanner({ title, percentage }: ListComponentProps) {

  return (
    <View style={styles.listContainer}>
      <Text>{title}</Text>
      <Text>{percentage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    listContainer: {
    padding: 10,
    borderRadius: 9,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D0D0D0'
  },
});
