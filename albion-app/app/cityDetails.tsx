import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';
import { imageData } from '@/data/CityData';

export default function CityDetails() {
  const { index } = useLocalSearchParams<{ index: number }>();

  if (isNaN(index) || index < 0 || index >= imageData.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>City not found</Text>
      </View>
    );
  }

  const city = imageData[index];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city.title}</Text>
      <Text style={styles.description}>{city.description}</Text>
      <Image source={city.source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'

  },
  description: {
    fontSize: 16,
    color: 'white'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
});
